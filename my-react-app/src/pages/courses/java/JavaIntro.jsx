import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const JavaIntro = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Introduction</h1>
      <p className={styles.introParagraph}>
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers <em>write once, run anywhere</em> (WORA).
      </p>

      

      <h2 className={styles.subsectionTitle}>The History</h2>
      <p>
        Java was developed by <strong>James Gosling</strong> at Sun Microsystems (which has since been acquired by Oracle) and released in 1995.
        It was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time.
        Originally named <strong>Oak</strong> after an oak tree that stood outside Gosling's office, it went by the name <em>Green</em> later, and was finally renamed <strong>Java</strong>, from Java coffee.
      </p>

      <h2 className={styles.subsectionTitle}>Why Learn Java?</h2>
      <ul className={styles.list}>
        <li><strong>Popularity:</strong> Java is one of the most popular programming languages in the world. It is used by some of the biggest companies (Google, Amazon, Netflix, Uber).</li>
        <li><strong>Enterprise:</strong> It is the backbone of the banking and financial industry.</li>
        <li><strong>Android:</strong> Java was the primary language for Android development for a decade (before Kotlin).</li>
        <li><strong>Community:</strong> It has a massive community and ecosystem (Spring Boot, Hibernate, Maven).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>How Java Works (The JVM)</h2>
      <p>
        Java is unique because it is both <strong>compiled</strong> and <strong>interpreted</strong>.
      </p>
      <ol>
        <li><strong>Source Code:</strong> You write code in a <code>.java</code> file.</li>
        <li><strong>Compiler (javac):</strong> The compiler turns this into <strong>Bytecode</strong> (<code>.class</code> file). This bytecode is not readable by humans or your specific CPU.</li>
        <li><strong>JVM (Java Virtual Machine):</strong> When you run the program, the JVM translates the Bytecode into machine code that your specific computer understands.</li>
      </ol>
      <div className={styles.infoBox}>
        <p><strong>Key Concept:</strong> This architecture allows Java to be platform-independent. You can compile a Java program on Windows and run the bytecode on Linux without changing a single line of code.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Java Editions</h2>
      <p>There are three main editions of Java:</p>
      <ul className={styles.list}>
        <li><strong>Java SE (Standard Edition):</strong> The core Java platform. It contains all the libraries for desktop development, networking, security, database access, GUI development, and XML parsing.</li>
        <li><strong>Java EE (Enterprise Edition):</strong> Built on top of SE, this provides libraries for enterprise-level, distributed applications (web apps, servlets).</li>
        <li><strong>Java ME (Micro Edition):</strong> A lightweight version for mobile devices and embedded systems.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Key Terminologies</h2>
      <table className={styles.table}>
        <thead><tr><th>Acronym</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>JDK</strong></td><td>(Java Development Kit) The toolbox you need to <em>write</em> Java code. Includes the compiler.</td></tr>
          <tr><td><strong>JRE</strong></td><td>(Java Runtime Environment) The software needed to <em>run</em> Java programs.</td></tr>
          <tr><td><strong>JVM</strong></td><td>(Java Virtual Machine) The engine that actually executes the code.</td></tr>
        </tbody>
      </table>

      <div className={styles.navigationButtons}>
        <Link to="/courses"><button className={styles.prevButton}>❮ Course Menu</button></Link>
        <Link to="/course/java/get-started"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaIntro;