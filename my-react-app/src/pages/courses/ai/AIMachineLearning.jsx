import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const AIMachineLearning = () => {
    // A conceptual Python example for ML
    const mlExample = `# Conceptual example of a simple ML model using scikit-learn syntax
from sklearn.linear_model import LinearRegression

# 1. Get Data (Hours Studied vs. Exam Score)
X_train = [[1], [2], [3], [4], [5]] # Hours
y_train = [50, 60, 70, 80, 90]      # Scores

# 2. Create Model
model = LinearRegression()

# 3. Train Model (The AI "learns" the pattern)
model.fit(X_train, y_train)

# 4. Make Prediction for 6 hours of study
prediction = model.predict([[6]])
print(f"Predicted score for 6 hours: {prediction[0]}")
# Output would be 100.0`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Machine Learning (ML)</h1>
      <p className={styles.introParagraph}>
        Machine Learning is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Core Idea:</strong> Instead of writing code that says "if this, do that," you feed data to an algorithm and let it find the patterns itself.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Three Main Types of ML</h2>
      
      <h3>1. Supervised Learning</h3>
      <p>
        The algorithm is trained on labeled data. It's like a teacher supervising a student. You give it inputs (pictures of cats) and the correct answers (label "cat").
      </p>
      <ul>
        <li><strong>Uses:</strong> Spam filtering, image classification, predicting house prices.</li>
      </ul>

      <h3>2. Unsupervised Learning</h3>
      <p>
        The algorithm is given unlabeled data and must find structure on its own. It's like giving a child a bucket of mixed lego blocks and letting them sort them by color or size without telling them how.
      </p>
      <ul>
        <li><strong>Uses:</strong> Customer segmentation in marketing, anomaly detection (finding credit card fraud).</li>
      </ul>

      <h3>3. Reinforcement Learning</h3>
      <p>
        The algorithm learns through trial and error. It takes actions in an environment and receives rewards or penalties. It tries to maximize its total reward.
      </p>
      <ul>
        <li><strong>Uses:</strong> Teaching robots to walk, playing complex games like Chess or Go, optimizing supply chains.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>ML Code Concept</h2>
      <p>
        While we can't run full ML libraries here in the browser yet, this Python snippets shows how simple it can be to train a model using popular libraries like scikit-learn.
      </p>

      <TryItYourselfEditor initialCode={mlExample} language="python" />

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/types-of-ai" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/deep-learning" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIMachineLearning;