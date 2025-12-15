import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const JavaStrings = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Strings</h1>
      <p className={styles.introParagraph}>
        A String is a sequence of characters. But in Java, a String is an <strong>Object</strong> that represents a sequence of characters. 
        The <code>java.lang.String</code> class is used to create a string object.
      </p>

      

      <h2 className={styles.subsectionTitle}>Creating Strings</h2>
      <p>There are two ways to create a String in Java:</p>
      <ol>
        <li><strong>String Literal:</strong> <code>String s = "Welcome";</code> (Stored in String Pool)</li>
        <li><strong>new Keyword:</strong> <code>String s = new String("Welcome");</code> (Stored in Heap Memory)</li>
      </ol>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    String greeting = "Hello";
    System.out.println(greeting);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>String Immutability</h2>
      <p>
        In Java, String objects are <strong>immutable</strong>. Immutable simply means unmodifiable or unchangeable.
        Once a String object is created its data or state can't be changed but a new String object is created.
      </p>

      <h2 className={styles.subsectionTitle}>String Length</h2>
      <p>A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the <code>length()</code> method:</p>
      <div className={styles.codeBlock}>
        <code>
          String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";<br/>
          System.out.println("The length of the txt string is: " + txt.length());
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common String Methods</h2>
      <ul className={styles.list}>
        <li><code>toUpperCase()</code> - Converts a string to upper case letters</li>
        <li><code>toLowerCase()</code> - Converts a string to lower case letters</li>
        <li><code>indexOf()</code> - Returns the index (the position) of the first occurrence of a specified text in a string (including whitespace)</li>
        <li><code>concat()</code> - Appends a string to the end of another string</li>
      </ul>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    String txt = "Hello World";
    System.out.println(txt.toUpperCase());   // "HELLO WORLD"
    System.out.println(txt.toLowerCase());   // "hello world"
    System.out.println(txt.indexOf("World")); // 6
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>String Concatenation</h2>
      <p>The <code>+</code> operator can be used between strings to combine them. This is called concatenation:</p>
      <div className={styles.codeBlock}>
        <code>
          String firstName = "John";<br/>
          String lastName = "Doe";<br/>
          System.out.println(firstName + " " + lastName);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Comparing Strings: == vs equals()</h2>
      <div className={styles.infoBox}>
        <p><strong>Interview Question:</strong> What is the difference?</p>
        <ul>
          <li><code>==</code> compares <strong>references</strong> (memory address). Does <code>s1</code> point to the exact same object as <code>s2</code>?</li>
          <li><code>equals()</code> compares <strong>content</strong>. Do the strings contain the same characters?</li>
        </ul>
        <p><strong>Always use <code>.equals()</code> when comparing string content!</strong></p>
      </div>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>Java is vast. Here are the best resources to master it.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/head-first-java/0596009208/" target="_blank" rel="noopener noreferrer">Head First Java</a></strong><br/>
              A brain-friendly guide that makes learning Java fun and engaging.
            </li>
            <li>
              <strong><a href="https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997" target="_blank" rel="noopener noreferrer">Effective Java</a></strong> by Joshua Bloch<br/>
              The "Bible" for intermediate/advanced Java developers. Mandatory reading.
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://dev.java/learn/" target="_blank" rel="noopener noreferrer">Dev.java (Official)</a></strong><br/>
              Oracle's official portal for learning modern Java.
            </li>
            <li>
              <strong><a href="https://www.baeldung.com/" target="_blank" rel="noopener noreferrer">Baeldung</a></strong><br/>
              The best articles and tutorials for Java and Spring Boot.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/operators"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/courses"><button className={styles.nextButton}>Finish Course 🏁</button></Link>
      </div>
    </div>
  );
};

export default JavaStrings;