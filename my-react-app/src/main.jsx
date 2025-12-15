import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';

// --- Import Icons ---
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaCode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { AiOutlineDatabase, AiOutlineRobot } from 'react-icons/ai';

import './index.css';

// Import Context Providers
import { ChatbotProvider } from './context/ChatbotContext';
import { UserProvider } from './context/UserContext';

// Import Layout Components
import Navbar from './components/Navbar/Navbar';
import ContactFooter from './components/ContactFooter/ContactFooter';
import Chatbot from './components/Chatbot/Chatbot';
import ParticlesBackground from './components/ParticlesBackground';
import TextSelectionPopup from './components/TextSelectionPopup/TextSelectionPopup';

// Import Page Components
import App from './App';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUpExpert from './pages/SignUpExpert';
import Upgrade from './pages/Upgrade';
import PaymentSuccess from './pages/PaymentSuccess';
import VerifyCode from './pages/VerifyCode';
import Messages from './pages/Messages';

// --- COMMUNITY PAGES ---
import Community from './pages/Community';
import ExpertCommunity from './pages/ExpertCommunity';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';

// --- TEST AND CERTIFICATE PAGES ---
import CourseFinalTest from './pages/CourseFinalTest';
import Certificate from './pages/Certificate';

// --- Course Related Imports ---
import CourseLayout from './layouts/CourseLayout';
import ComingSoon from './pages/courses/ComingSoon';

// =========================================
// IMPORT COURSE CONTENT COMPONENTS
// =========================================

// --- AI Course ---
import AICourseIntro from './pages/courses/ai/AICourseIntro';
import AIWhatIs from './pages/courses/ai/AIWhatIs';
import AIHistory from './pages/courses/ai/AIHistory';
import AITypes from './pages/courses/ai/AITypes';
import AIMachineLearning from './pages/courses/ai/AIMachineLearning';
import AIDeepLearning from './pages/courses/ai/AIDeepLearning';
import AINLP from './pages/courses/ai/AINLP';
import AIComputerVision from './pages/courses/ai/AIComputerVision';
import AIEthics from './pages/courses/ai/AIEthics';
import AIFuture from './pages/courses/ai/AIFuture';

// --- HTML Course ---
import HTMLIntro from './pages/courses/html/HTMLIntro';
import HTMLEditors from './pages/courses/html/HTMLEditors';
import HTMLBasic from './pages/courses/html/HTMLBasic';
import HTMLElements from './pages/courses/html/HTMLElements';
import HTMLAttributes from './pages/courses/html/HTMLAttributes';
import HTMLHeadings from './pages/courses/html/HTMLHeadings';
import HTMLParagraphs from './pages/courses/html/HTMLParagraphs';
import HTMLStyles from './pages/courses/html/HTMLStyles';
import HTMLLinks from './pages/courses/html/HTMLLinks';
import HTMLImages from './pages/courses/html/HTMLImages';

// --- CSS Course ---
import CSSIntro from './pages/courses/css/CSSIntro';
import CSSSyntax from './pages/courses/css/CSSSyntax';
import CSSSelectors from './pages/courses/css/CSSSelectors';
import CSSHowTo from './pages/courses/css/CSSHowTo';
import CSSComments from './pages/courses/css/CSSComments';
import CSSColors from './pages/courses/css/CSSColors';
import CSSBackgrounds from './pages/courses/css/CSSBackgrounds';
import CSSBorders from './pages/courses/css/CSSBorders';
import CSSMargins from './pages/courses/css/CSSMargins';
import CSSPadding from './pages/courses/css/CSSPadding';

// --- JavaScript Course ---
import JSIntro from './pages/courses/javascript/JSIntro';
import JSWhereTo from './pages/courses/javascript/JSWhereTo';
import JSOutput from './pages/courses/javascript/JSOutput';
import JSStatements from './pages/courses/javascript/JSStatements';
import JSSyntax from './pages/courses/javascript/JSSyntax';
import JSComments from './pages/courses/javascript/JSComments';
import JSVariables from './pages/courses/javascript/JSVariables';
import JSLet from './pages/courses/javascript/JSLet';
import JSConst from './pages/courses/javascript/JSConst';
import JSOperators from './pages/courses/javascript/JSOperators';

// --- Python Course ---
import PythonIntro from './pages/courses/python/PythonIntro';
import PythonGetStarted from './pages/courses/python/PythonGetStarted';
import PythonSyntax from './pages/courses/python/PythonSyntax';
import PythonComments from './pages/courses/python/PythonComments';
import PythonVariables from './pages/courses/python/PythonVariables';
import PythonDataTypes from './pages/courses/python/PythonDataTypes';
import PythonNumbers from './pages/courses/python/PythonNumbers';
import PythonCasting from './pages/courses/python/PythonCasting';
import PythonStrings from './pages/courses/python/PythonStrings';
import PythonBooleans from './pages/courses/python/PythonBooleans';

// --- React Course ---
import ReactIntro from './pages/courses/react/ReactIntro';
import ReactGetStarted from './pages/courses/react/ReactGetStarted';
import ReactUpgrade from './pages/courses/react/ReactUpgrade';
import ReactES6 from './pages/courses/react/ReactES6';
import ReactRenderHTML from './pages/courses/react/ReactRenderHTML';
import ReactJSX from './pages/courses/react/ReactJSX';
import ReactComponents from './pages/courses/react/ReactComponents';
import ReactClass from './pages/courses/react/ReactClass';
import ReactProps from './pages/courses/react/ReactProps';
import ReactEvents from './pages/courses/react/ReactEvents';

// --- Java Course ---
import JavaIntro from './pages/courses/java/JavaIntro';
import JavaGetStarted from './pages/courses/java/JavaGetStarted';
import JavaSyntax from './pages/courses/java/JavaSyntax';
import JavaOutput from './pages/courses/java/JavaOutput';
import JavaComments from './pages/courses/java/JavaComments';
import JavaVariables from './pages/courses/java/JavaVariables';
import JavaDataTypes from './pages/courses/java/JavaDataTypes';
import JavaTypeCasting from './pages/courses/java/JavaTypeCasting';
import JavaOperators from './pages/courses/java/JavaOperators';
import JavaStrings from './pages/courses/java/JavaStrings';

// --- C# Course ---
import CSharpIntro from './pages/courses/csharp/CSharpIntro';
import CSharpGetStarted from './pages/courses/csharp/CSharpGetStarted';
import CSharpSyntax from './pages/courses/csharp/CSharpSyntax';
import CSharpOutput from './pages/courses/csharp/CSharpOutput';
import CSharpComments from './pages/courses/csharp/CSharpComments';
import CSharpVariables from './pages/courses/csharp/CSharpVariables';
import CSharpDataTypes from './pages/courses/csharp/CSharpDataTypes';
import CSharpTypeCasting from './pages/courses/csharp/CSharpTypeCasting';
import CSharpUserInput from './pages/courses/csharp/CSharpUserInput';
import CSharpOperators from './pages/courses/csharp/CSharpOperators';

// --- SQL Course (10 Lessons) ---
import SQLIntro from './pages/courses/sql/SQLIntro';
import SQLSyntax from './pages/courses/sql/SQLSyntax';
import SQLSelect from './pages/courses/sql/SQLSelect';
import SQLSelectDistinct from './pages/courses/sql/SQLSelectDistinct';
import SQLWhere from './pages/courses/sql/SQLWhere';
import SQLAndOrNot from './pages/courses/sql/SQLAndOrNot';
import SQLOrderBy from './pages/courses/sql/SQLOrderBy';
import SQLInsertInto from './pages/courses/sql/SQLInsertInto';
import SQLNullValues from './pages/courses/sql/SQLNullValues';
import SQLUpdate from './pages/courses/sql/SQLUpdate';


// =========================================
// DEFINE COURSE TOPICS DATA
// =========================================

const aiTopics = [
  { path: 'introduction', title: 'AI Introduction', component: AICourseIntro },
  { path: 'what-is-ai', title: 'What is AI?', component: AIWhatIs },
  { path: 'history-of-ai', title: 'History of AI', component: AIHistory },
  { path: 'types-of-ai', title: 'Types of AI', component: AITypes },
  { path: 'machine-learning', title: 'Machine Learning', component: AIMachineLearning },
  { path: 'deep-learning', title: 'Deep Learning', component: AIDeepLearning },
  { path: 'nlp', title: 'Natural Language Processing', component: AINLP },
  { path: 'computer-vision', title: 'Computer Vision', component: AIComputerVision },
  { path: 'ethics', title: 'AI Ethics', component: AIEthics },
  { path: 'future', title: 'Future of AI', component: AIFuture },
];

const htmlTopics = [
  { path: 'introduction', title: 'HTML Introduction', component: HTMLIntro },
  { path: 'editors', title: 'HTML Editors', component: HTMLEditors },
  { path: 'basic', title: 'HTML Basic', component: HTMLBasic },
  { path: 'elements', title: 'HTML Elements', component: HTMLElements },
  { path: 'attributes', title: 'HTML Attributes', component: HTMLAttributes },
  { path: 'headings', title: 'HTML Headings', component: HTMLHeadings },
  { path: 'paragraphs', title: 'HTML Paragraphs', component: HTMLParagraphs },
  { path: 'styles', title: 'HTML Styles', component: HTMLStyles },
  { path: 'links', title: 'HTML Links', component: HTMLLinks },
  { path: 'images', title: 'HTML Images', component: HTMLImages },
];

const cssTopics = [
  { path: 'introduction', title: 'CSS Introduction', component: CSSIntro },
  { path: 'syntax', title: 'CSS Syntax', component: CSSSyntax },
  { path: 'selectors', title: 'CSS Selectors', component: CSSSelectors },
  { path: 'how-to', title: 'CSS How To', component: CSSHowTo },
  { path: 'comments', title: 'CSS Comments', component: CSSComments },
  { path: 'colors', title: 'CSS Colors', component: CSSColors },
  { path: 'backgrounds', title: 'CSS Backgrounds', component: CSSBackgrounds },
  { path: 'borders', title: 'CSS Borders', component: CSSBorders },
  { path: 'margins', title: 'CSS Margins', component: CSSMargins },
  { path: 'padding', title: 'CSS Padding', component: CSSPadding },
];

const jsTopics = [
  { path: 'introduction', title: 'JS Introduction', component: JSIntro },
  { path: 'where-to', title: 'JS Where To', component: JSWhereTo },
  { path: 'output', title: 'JS Output', component: JSOutput },
  { path: 'statements', title: 'JS Statements', component: JSStatements },
  { path: 'syntax', title: 'JS Syntax', component: JSSyntax },
  { path: 'comments', title: 'JS Comments', component: JSComments },
  { path: 'variables', title: 'JS Variables', component: JSVariables },
  { path: 'let', title: 'JS Let', component: JSLet },
  { path: 'const', title: 'JS Const', component: JSConst },
  { path: 'operators', title: 'JS Operators', component: JSOperators },
];

const pythonTopics = [
  { path: 'introduction', title: 'Python Introduction', component: PythonIntro },
  { path: 'get-started', title: 'Python Get Started', component: PythonGetStarted },
  { path: 'syntax', title: 'Python Syntax', component: PythonSyntax },
  { path: 'comments', title: 'Python Comments', component: PythonComments },
  { path: 'variables', title: 'Python Variables', component: PythonVariables },
  { path: 'data-types', title: 'Python Data Types', component: PythonDataTypes },
  { path: 'numbers', title: 'Python Numbers', component: PythonNumbers },
  { path: 'casting', title: 'Python Casting', component: PythonCasting },
  { path: 'strings', title: 'Python Strings', component: PythonStrings },
  { path: 'booleans', title: 'Python Booleans', component: PythonBooleans },
];

const reactTopics = [
  { path: 'introduction', title: 'React Introduction', component: ReactIntro },
  { path: 'get-started', title: 'React Get Started', component: ReactGetStarted },
  { path: 'upgrade', title: 'React Upgrade', component: ReactUpgrade },
  { path: 'es6', title: 'React ES6', component: ReactES6 },
  { path: 'render-html', title: 'React Render HTML', component: ReactRenderHTML },
  { path: 'jsx', title: 'React JSX', component: ReactJSX },
  { path: 'components', title: 'React Components', component: ReactComponents },
  { path: 'class', title: 'React Class', component: ReactClass },
  { path: 'props', title: 'React Props', component: ReactProps },
  { path: 'events', title: 'React Events', component: ReactEvents },
];

const javaTopics = [
  { path: 'introduction', title: 'Java Introduction', component: JavaIntro },
  { path: 'get-started', title: 'Java Get Started', component: JavaGetStarted },
  { path: 'syntax', title: 'Java Syntax', component: JavaSyntax },
  { path: 'output', title: 'Java Output', component: JavaOutput },
  { path: 'comments', title: 'Java Comments', component: JavaComments },
  { path: 'variables', title: 'Java Variables', component: JavaVariables },
  { path: 'data-types', title: 'Java Data Types', component: JavaDataTypes },
  { path: 'type-casting', title: 'Java Type Casting', component: JavaTypeCasting },
  { path: 'operators', title: 'Java Operators', component: JavaOperators },
  { path: 'strings', title: 'Java Strings', component: JavaStrings },
];

const csharpTopics = [
  { path: 'introduction', title: 'C# Introduction', component: CSharpIntro },
  { path: 'get-started', title: 'C# Get Started', component: CSharpGetStarted },
  { path: 'syntax', title: 'C# Syntax', component: CSharpSyntax },
  { path: 'output', title: 'C# Output', component: CSharpOutput },
  { path: 'comments', title: 'C# Comments', component: CSharpComments },
  { path: 'variables', title: 'C# Variables', component: CSharpVariables },
  { path: 'data-types', title: 'C# Data Types', component: CSharpDataTypes },
  { path: 'type-casting', title: 'C# Type Casting', component: CSharpTypeCasting },
  { path: 'user-input', title: 'C# User Input', component: CSharpUserInput },
  { path: 'operators', title: 'C# Operators', component: CSharpOperators },
];

const sqlTopics = [
  { path: 'introduction', title: 'SQL Introduction', component: SQLIntro },
  { path: 'syntax', title: 'SQL Syntax', component: SQLSyntax },
  { path: 'select', title: 'SQL Select', component: SQLSelect },
  { path: 'select-distinct', title: 'SQL Select Distinct', component: SQLSelectDistinct },
  { path: 'where', title: 'SQL Where', component: SQLWhere },
  { path: 'and-or-not', title: 'SQL And, Or, Not', component: SQLAndOrNot },
  { path: 'order-by', title: 'SQL Order By', component: SQLOrderBy },
  { path: 'insert-into', title: 'SQL Insert Into', component: SQLInsertInto },
  { path: 'null-values', title: 'SQL Null Values', component: SQLNullValues },
  { path: 'update', title: 'SQL Update', component: SQLUpdate },
];

// =========================================
// MAIN CATALOG
// =========================================
const allCourses = [
  { id: 'ai', title: 'Introduction to AI', basePath: '/course/introduction-to-ai', icon: AiOutlineRobot, topicsData: aiTopics, isPremium: false },
  { id: 'html', title: 'HTML', basePath: '/course/html', icon: FaHtml5, topicsData: htmlTopics, isPremium: false },
  { id: 'css', title: 'CSS', basePath: '/course/css', icon: FaCss3Alt, topicsData: cssTopics, isPremium: false },
  { id: 'javascript', title: 'JavaScript', basePath: '/course/javascript', icon: FaJsSquare, topicsData: jsTopics, isPremium: true },
  { id: 'python', title: 'Python', basePath: '/course/python', icon: FaPython, topicsData: pythonTopics, isPremium: true },
  { id: 'react', title: 'React', basePath: '/course/react', icon: FaReact, topicsData: reactTopics, isPremium: true },
  { id: 'java', title: 'Java', basePath: '/course/java', icon: FaCode, topicsData: javaTopics, isPremium: true },
  { id: 'csharp', title: 'C#', basePath: '/course/csharp', icon: FaCode, topicsData: csharpTopics, isPremium: true },
  { id: 'sql', title: 'SQL', basePath: '/course/sql', icon: AiOutlineDatabase, topicsData: sqlTopics, isPremium: true },
];

// --- Router Definition ---
const RootLayout = () => {
  const location = useLocation();
  
  // Hide chatbot on test and certificate pages
  const hideChatbot = location.pathname.includes('/final-test') || 
                      location.pathname.includes('/certificate');

  return (
    <UserProvider>
      <ChatbotProvider>
        <ParticlesBackground /> 
        <Navbar />
        <main> <Outlet /> </main>
        <ContactFooter />
        
        {!hideChatbot && <Chatbot />}
        <TextSelectionPopup /> 
      </ChatbotProvider>
    </UserProvider>
  );
};

// Automatically generate routes for every course and topic
const courseRoutes = allCourses.map(course => ({
  path: course.basePath,
  element: <CourseLayout courseTitle={course.title} courseData={course.topicsData} courseId={course.id} isPremium={course.isPremium} />,
  children: course.topicsData.map(topic => ({
    path: topic.path,
    element: React.createElement(topic.component || ComingSoon) 
  })),
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: 'courses', element: <Courses /> }, 
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'profile', element: <Profile /> },
      { path: 'signup-expert', element: <SignUpExpert /> },
      { path: 'verify-code', element: <VerifyCode /> },
      { path: 'upgrade', element: <Upgrade /> },
      { path: 'payment-success', element: <PaymentSuccess /> },
      { path: 'messages', element: <Messages /> },
      
      // --- COMMUNITY ROUTES ---
      { path: 'community', element: <Community /> },
      { path: 'community/expert', element: <ExpertCommunity /> },
      { path: 'community/create', element: <CreatePost /> },
      { path: 'community/post/:id', element: <PostDetail /> },

      // --- TEST AND CERTIFICATE ROUTES ---
      { path: 'course/:courseId/final-test', element: <CourseFinalTest /> },
      { path: 'certificate/:courseId', element: <Certificate /> },

      ...courseRoutes,
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);