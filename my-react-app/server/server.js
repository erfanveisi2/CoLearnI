require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const http = require('http'); // Import HTTP module
const { Server } = require('socket.io'); // Import Socket.io

const app = express();

// Increase payload limit for image uploads (Base64)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both common Vite ports
    methods: ["GET", "POST"]
  }
});


// ==========================================
// 1. DATABASE CONNECTION
// ==========================================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error('MongoDB Connection Error:', err));


// ==========================================
// 2. SCHEMAS
// ==========================================

// User Schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'NORMAL' },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  profilePicture: { type: String, default: '' }, // Base64 string
  isVerified: { type: Boolean, default: false },
  emailVerificationCode: String,
  emailVerificationExpires: Date,
  // Progress Tracking
  progress: [{
    courseId: String, 
    completedTopics: [String] 
  }],
  // Test Results
  testResults: [{
    courseId: String,
    score: Number,
    passed: Boolean,
    completedAt: { type: Date, default: Date.now }
  }]
});
const User = mongoose.model('User', UserSchema);

// AI Chat Schema (Bot)
const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messages: [{
    role: { type: String, enum: ['user', 'model'], required: true },
    parts: [{ text: { type: String, required: true } }],
    timestamp: { type: Date, default: Date.now }
  }]
});
const Chat = mongoose.model('Chat', ChatSchema);

// Direct Message Schema (User to User)
const DirectMessageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // Username
  recipient: { type: String, required: true }, // Username
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});
const DirectMessage = mongoose.model('DirectMessage', DirectMessageSchema);

// Community Post Schema
const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: String,
  authorRole: String, // User role (NORMAL, PAID, EXPERT)
  authorProfilePicture: String, // Profile picture URL/Base64
  caption: { type: String, required: true },
  image: { type: String }, // Base64 string
  createdAt: { type: Date, default: Date.now },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  commentsCount: { type: Number, default: 0 },
  isExpert: { type: Boolean, default: false } // Flag for expert community posts
});
const Post = mongoose.model('Post', PostSchema);

// Community Comment Schema (UPDATED FOR REPLIES)
const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: String,
  authorRole: String, // User role (NORMAL, PAID, EXPERT)
  authorProfilePicture: String, // Profile picture URL/Base64
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // New field for replies
  replies: [{
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    authorName: String,
    authorRole: String, // User role (NORMAL, PAID, EXPERT)
    authorProfilePicture: String, // Profile picture URL/Base64
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
});
const Comment = mongoose.model('Comment', CommentSchema);


// ==========================================
// 3. SOCKET.IO LOGIC (Real-time Chat)
// ==========================================
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins a room named after their username
  socket.on('join', (username) => {
    socket.join(username);
    console.log(`${username} joined their chat room.`);
  });

  // Handling sending messages
  socket.on('sendMessage', async (data) => {
    try {
      const { sender, recipient, text } = data;
      
      // 1. Save to Database immediately
      const newMessage = new DirectMessage({ sender, recipient, text });
      await newMessage.save();
      console.log(`Message saved from ${sender} to ${recipient}`);

      // 2. Emit to Recipient (if online in their room)
      io.to(recipient).emit('receiveMessage', newMessage);
      
      // 3. Emit confirmation back to Sender
      io.to(sender).emit('messageSent', newMessage);
      
    } catch (err) {
      console.error('Socket Message Error:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


// ==========================================
// 4. MIDDLEWARE & HELPERS
// ==========================================

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateVerificationCode = () => {
  return crypto.randomInt(100000, 999999).toString(); 
};

const sendVerificationCodeEmail = async (user, code) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: 'Your CoLearnI Verification Code',
    html: `
      <p>Hello,</p>
      <p>Thank you for registering with CoLearnI!</p>
      <p>Your verification code is: <strong>${code}</strong></p>
      <p>This code will expire in 10 minutes.</p>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification code email sent to:', user.email);
  } catch (error) {
    console.error('Error sending verification code email:', error);
  }
};


// ==========================================
// 5. AUTH ROUTES
// ==========================================

const handleSignUp = async (req, res, userRole = 'NORMAL') => {
  try {
    const { email, username, password } = req.body;
    
    if (!username) return res.status(400).json({ msg: 'Username is required.' });

    let existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      if (existingUser.email === email && !existingUser.isVerified) {
        const verificationCode = generateVerificationCode();
        existingUser.emailVerificationCode = verificationCode;
        existingUser.emailVerificationExpires = Date.now() + 600000; 
        await existingUser.save();
        await sendVerificationCodeEmail(existingUser, verificationCode);
        return res.status(200).json({ msg: 'Verification code resent. Please check your inbox.', email: existingUser.email });
      }
      return res.status(400).json({ msg: 'User with this email or username already exists.' });
    }

    const user = new User({ email, username, password, role: userRole });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const verificationCode = generateVerificationCode();
    user.emailVerificationCode = verificationCode;
    user.emailVerificationExpires = Date.now() + 600000; 

    await user.save();
    await sendVerificationCodeEmail(user, verificationCode);

    res.status(201).json({ msg: 'Signup successful.', email: user.email });
  } catch (err) {
    console.error(`Error during ${userRole} signup:`, err.message);
    res.status(500).send(`Server error during ${userRole} signup.`);
  }
};

app.post('/api/auth/signup', (req, res) => handleSignUp(req, res, 'NORMAL'));
app.post('/api/auth/signup-expert', (req, res) => handleSignUp(req, res, 'EXPERT'));
app.post('/api/auth/signup-expert-verified', (req, res) => handleSignUp(req, res, 'EXPERT'));

app.post('/api/auth/verify-code', async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({
      email: email,
      emailVerificationCode: code,
      emailVerificationExpires: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid or expired verification code.' });
    }

    if (user.isVerified) {
       const payload = { user: { id: user.id } };
       jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
         if (err) throw err;
         return res.json({ token });
       });
       return;
    }

    user.isVerified = true;
    user.emailVerificationCode = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (err) {
    console.error('[Verify Code] Server Error:', err.message);
    res.status(500).send('Server error during code verification.');
  }
});

app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });
    
    if (!user.isVerified) return res.status(401).json({ msg: 'Account not verified.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('[Sign In] Server Error:', err.message);
    res.status(500).send('Server error during sign in.');
  }
});


// ==========================================
// 6. PROFILE & PROGRESS ROUTES
// ==========================================
app.get('/api/auth/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Get Profile Error:', err.message);
    res.status(500).send('Server Error');
  }
});

app.put('/api/auth/update', auth, async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body;
    if (username) {
      const existing = await User.findOne({ username, _id: { $ne: req.user.id } });
      if (existing) return res.status(400).json({ msg: 'Username already taken.' });
    }
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { firstName, lastName, username },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Update Profile Error:', err.message);
    res.status(500).send('Server Error');
  }
});

app.post('/api/user/progress', auth, async (req, res) => {
  try {
    const { courseId, topicPath } = req.body;
    const user = await User.findById(req.user.id);

    let courseProgress = user.progress.find(p => p.courseId === courseId);

    if (!courseProgress) {
      user.progress.push({ courseId, completedTopics: [topicPath] });
    } else {
      if (!courseProgress.completedTopics.includes(topicPath)) {
        courseProgress.completedTopics.push(topicPath);
      } else {
        courseProgress.completedTopics = courseProgress.completedTopics.filter(t => t !== topicPath);
      }
    }

    user.markModified('progress');
    await user.save();
    res.json(user.progress);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error saving progress');
  }
});

// Save Final Test Results
app.post('/api/user/final-test', auth, async (req, res) => {
  try {
    const { courseId, score, passed } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if user already passed this test
    const existingTest = user.testResults.find(t => t.courseId === courseId && t.passed);
    
    if (existingTest) {
      return res.status(400).json({ msg: 'You have already passed this test' });
    }

    // Add or update test result
    const testIndex = user.testResults.findIndex(t => t.courseId === courseId);
    
    if (testIndex !== -1) {
      // Update existing test result
      user.testResults[testIndex] = {
        courseId,
        score,
        passed,
        completedAt: Date.now()
      };
    } else {
      // Add new test result
      user.testResults.push({
        courseId,
        score,
        passed,
        completedAt: Date.now()
      });
    }

    user.markModified('testResults');
    await user.save();
    
    res.json({ 
      msg: passed ? 'Test passed! Certificate generated.' : 'Test completed.',
      testResults: user.testResults 
    });
  } catch (err) {
    console.error('Error saving test results:', err);
    res.status(500).send('Server Error saving test results');
  }
});

app.put('/api/auth/update-profile-picture', auth, async (req, res) => {
  try {
    const { profilePicture } = req.body;
    
    if (!profilePicture) {
      return res.status(400).json({ msg: 'No profile picture provided' });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profilePicture },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (err) {
    console.error('Update Profile Picture Error:', err.message);
    res.status(500).send('Server Error');
  }
});

app.put('/api/auth/remove-profile-picture', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profilePicture: '' },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (err) {
    console.error('Remove Profile Picture Error:', err.message);
    res.status(500).send('Server Error');
  }
});


// ==========================================
// 7. AI CHAT ROUTES
// ==========================================
app.get('/api/chat', auth, async (req, res) => {
  try {
    let chat = await Chat.findOne({ userId: req.user.id });
    if (!chat) {
      return res.json([]); 
    }
    res.json(chat.messages);
  } catch (err) {
    console.error('Get Chat Error:', err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/chat/message', auth, async (req, res) => {
  try {
    const { messages } = req.body; 
    let chat = await Chat.findOne({ userId: req.user.id });
    if (!chat) {
      chat = new Chat({ userId: req.user.id, messages: [] });
    }
    chat.messages.push(...messages);
    await chat.save();
    res.json(chat.messages);
  } catch (err) {
    console.error('Save Chat Error:', err);
    res.status(500).send('Server Error');
  }
});


// ==========================================
// 8. COMMUNITY ROUTES (Posts & Comments)
// ==========================================

// Get All Posts (Regular Community)
app.get('/api/community/posts', async (req, res) => {
  try {
    // Find posts where isExpert is false or doesn't exist (for backward compatibility)
    const posts = await Post.find({ $or: [{ isExpert: false }, { isExpert: { $exists: false } }] });
    // Sort by score (upvotes - downvotes) in descending order
    const sortedPosts = posts.sort((a, b) => {
      const scoreA = (a.upvotes?.length || 0) - (a.downvotes?.length || 0);
      const scoreB = (b.upvotes?.length || 0) - (b.downvotes?.length || 0);
      return scoreB - scoreA; // Descending order (highest score first)
    });
    res.json(sortedPosts);
  } catch (err) { res.status(500).send('Server Error'); }
});

// Get Expert Posts (Premium Only)
app.get('/api/community/expert-posts', auth, async (req, res) => {
  try {
    // Check if user has premium access
    const user = await User.findById(req.user.id);
    if (user.role !== 'PAID' && user.role !== 'EXPERT') {
      return res.status(403).json({ msg: 'Premium access required' });
    }

    const posts = await Post.find({ isExpert: true });
    // Sort by score (upvotes - downvotes) in descending order
    const sortedPosts = posts.sort((a, b) => {
      const scoreA = (a.upvotes?.length || 0) - (a.downvotes?.length || 0);
      const scoreB = (b.upvotes?.length || 0) - (b.downvotes?.length || 0);
      return scoreB - scoreA; // Descending order (highest score first)
    });
    res.json(sortedPosts);
  } catch (err) { res.status(500).send('Server Error'); }
});

// Get Single Post
app.get('/api/community/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json(post);
  } catch (err) { res.status(500).send('Server Error'); }
});

// Create Post
app.post('/api/community/posts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { caption, image, isExpert } = req.body;

    // If isExpert is true, check if user has premium access
    if (isExpert && user.role !== 'PAID' && user.role !== 'EXPERT') {
      return res.status(403).json({ msg: 'Premium access required to post in Expert Community' });
    }

    const newPost = new Post({
      author: req.user.id,
      authorName: user.username,
      authorRole: user.role,
      authorProfilePicture: user.profilePicture || '',
      caption,
      image,
      isExpert: isExpert || false
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Vote
app.put('/api/community/posts/:id/vote', auth, async (req, res) => {
  try {
    const { type } = req.body;
    const post = await Post.findById(req.params.id);
    const userId = req.user.id;

    const hasUpvoted = post.upvotes.includes(userId);
    const hasDownvoted = post.downvotes.includes(userId);

    // Remove existing votes
    if (hasUpvoted) post.upvotes.pull(userId);
    if (hasDownvoted) post.downvotes.pull(userId);

    // Add new vote only if it's different from the existing vote
    if (type === 'up' && !hasUpvoted) {
      post.upvotes.push(userId);
    } else if (type === 'down' && !hasDownvoted) {
      post.downvotes.push(userId);
    }

    await post.save();
    res.json(post);
  } catch (err) { res.status(500).send('Server Error'); }
});

// Comment (Top level)
app.post('/api/community/posts/:id/comment', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const post = await Post.findById(req.params.id);
    const newComment = new Comment({
      postId: req.params.id,
      author: req.user.id,
      authorName: user.username,
      authorRole: user.role, // Include user role
      authorProfilePicture: user.profilePicture || '', // Include profile picture
      text: req.body.text
    });
    await newComment.save();
    post.commentsCount = post.commentsCount + 1;
    await post.save();
    res.json(newComment);
  } catch (err) { res.status(500).send('Server Error'); }
});

//  NEW: Reply to Comment Route
app.post('/api/community/comments/:id/reply', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const comment = await Comment.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    const newReply = {
      author: req.user.id,
      authorName: user.username,
      authorRole: user.role, // Include user role
      authorProfilePicture: user.profilePicture || '', // Include profile picture
      text,
      createdAt: new Date()
    };

    comment.replies.push(newReply);
    await comment.save();

    // Optionally increment post comment count here too if you want
    // replies to count towards total comments
    const post = await Post.findById(comment.postId);
    post.commentsCount = post.commentsCount + 1;
    await post.save();

    res.json(comment); // Return the updated comment
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Get Comments
app.get('/api/community/posts/:id/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) { res.status(500).send('Server Error'); }
});


// ==========================================
// 9. DIRECT MESSAGING ROUTES
// ==========================================

// Search Users
app.get('/api/messages/search', auth, async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json([]);
    const users = await User.find({ 
      username: { $regex: query, $options: 'i' },
      _id: { $ne: req.user.id }
    }).select('username firstName lastName role profilePicture');
    res.json(users);
  } catch (err) { res.status(500).send('Server Error'); }
});

// Get Recent Conversations
app.get('/api/messages/conversations', auth, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    if (!currentUser) return res.status(404).json({msg: "User not found"});

    const sentTo = await DirectMessage.distinct('recipient', { sender: currentUser.username });
    const receivedFrom = await DirectMessage.distinct('sender', { recipient: currentUser.username });
    
    const uniqueUsers = [...new Set([...sentTo, ...receivedFrom])];
    
    const users = await User.find({ username: { $in: uniqueUsers } }).select('username role firstName lastName profilePicture');
    res.json(users);
  } catch (err) {
    console.error("Conversation Fetch Error:", err);
    res.status(500).send('Server Error');
  }
});

// Get Chat History
app.get('/api/messages/history/:username', auth, async (req, res) => {
  try {
    const myUser = await User.findById(req.user.id);
    const otherUsername = req.params.username;
    
    const messages = await DirectMessage.find({
      $or: [
        { sender: myUser.username, recipient: otherUsername },
        { sender: otherUsername, recipient: myUser.username }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) { res.status(500).send('Server Error'); }
});


// ==========================================
// 10. PAYMENT ROUTES (Stripe)
// ==========================================
app.post('/api/payment/create-checkout-session', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id, }
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer: customer.id,
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'CoLearnI Premium',
            description: 'Unlock all courses and expert community access.',
          },
          unit_amount: 990, 
        },
        quantity: 1,
      }],
      success_url: `http://localhost:5173/payment-success?session_id={CHECKOUT_SESSION_ID}&userId=${user.id}`,
      cancel_url: `http://localhost:5173/upgrade`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe Session Error:', err.message);
    res.status(500).send('Server Error creating checkout session');
  }
});

app.post('/api/payment/verify-upgrade', async (req, res) => {
  try {
    const { sessionId, userId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === 'paid') {
      const user = await User.findById(userId);
      if (user && user.role !== 'PAID') {
        user.role = 'PAID';
        await user.save();
        const updatedUser = await User.findById(userId).select('-password');
        return res.json({ msg: 'Upgrade successful!', user: updatedUser });
      }
      return res.status(400).json({ msg: 'User already upgraded or not found.' });
    }
    return res.status(400).json({ msg: 'Payment not successful.' });
  } catch (err) {
    console.error('Stripe Verification Error:', err.message);
    res.status(500).send('Server Error verifying payment');
  }
});


// ==========================================
// 11. CONTACT FORM ROUTE
// ==========================================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please fill out all fields.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'colearni.tech@gmail.com', 
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully.');
    res.status(200).json({ msg: 'Message sent successfully!' });

  } catch (err) {
    console.error('Error sending contact form email:', err.message);
    res.status(500).send('Server error while sending message.');
  }
});


// ==========================================
// 12. START SERVER
// ==========================================
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));