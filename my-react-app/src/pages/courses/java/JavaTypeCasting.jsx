import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaTypeCasting = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Type Casting</h1>
      <p className={styles.introParagraph}>
        Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting.
      </p>

      <h2 className={styles.subsectionTitle}>1. Widening Casting (Automatically)</h2>
      <p>
        Widening casting takes place when passing a smaller size type to a larger size type. Java handles this automatically because there is no risk of losing data.
      </p>
      <p><strong>Order:</strong> <code>byte</code> -&gt; <code>short</code> -&gt; <code>char</code> -&gt; <code>int</code> -&gt; <code>long</code> -&gt; <code>float</code> -&gt; <code>double</code></p>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);      // Outputs 9
    System.out.println(myDouble);   // Outputs 9.0
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>2. Narrowing Casting (Manually)</h2>
      <p>
        Narrowing casting takes place when passing a larger size type to a smaller size type.
        You <strong>must</strong> do this manually by placing the type in parentheses in front of the value.
      </p>
      <p><strong>Order:</strong> <code>double</code> -&gt; <code>float</code> -&gt; <code>long</code> -&gt; <code>int</code> -&gt; <code>char</code> -&gt; <code>short</code> -&gt; <code>byte</code></p>

      <div className={styles.infoBox}>
        <p><strong>Warning:</strong> Narrowing casting can lead to <strong>data loss</strong>. For example, casting <code>9.78</code> to an <code>int</code> will result in <code>9</code>, losing the decimal part completely.</p>
      </div>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    double myDouble = 9.78d;
    int myInt = (int) myDouble; // Manual casting: double to int

    System.out.println(myDouble);   // Outputs 9.78
    System.out.println(myInt);      // Outputs 9
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Real-Life Example</h2>
      <p>
        Here's a real-life example where we create a program to calculate the percentage of a user's score in relation to the maximum score in a game.
        We use type casting to ensure that the result is a floating-point value, rather than an integer.
      </p>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    // Set the maximum possible score in the game to 500
    int maxScore = 500;

    // The actual score of the user
    int userScore = 423;

    /* Calculate the percentage of the user's score in relation to the maximum score.
    The result needs to be a float, so we cast one of the values to float first. */
    float percentage = (float) userScore / maxScore * 100.0f;

    System.out.println("User's percentage is " + percentage);
  }
}`} 
        language="java" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/java/data-types"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/operators"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaTypeCasting;