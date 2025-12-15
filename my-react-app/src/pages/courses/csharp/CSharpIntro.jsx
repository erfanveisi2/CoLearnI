import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const CSharpIntro = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Introduction</h1>
      <p className={styles.introParagraph}>
        C# (pronounced "C-Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in the .NET ecosystem.
      </p>

      [Image of C# .NET architecture]

      <h2 className={styles.subsectionTitle}>The History</h2>
      <p>
        C# was developed by <strong>Anders Hejlsberg</strong> (also known for Turbo Pascal and Delphi) at Microsoft and launched in 2000. 
        It was designed to be a competitor to Java, sharing much of the same syntax but deeply integrated with Windows.
      </p>
      <p>
        The name "C sharp" was inspired by musical notation, where a sharp indicates that the written note should be made a semitone higher in pitch. It essentially claims to be "C++ but higher/better".
      </p>

      <h2 className={styles.subsectionTitle}>The Evolution of .NET</h2>
      <p>Understanding C# requires understanding the platform it runs on:</p>
      <ul className={styles.list}>
        <li><strong>.NET Framework:</strong> The original Windows-only runtime. Massive library, but tied to Windows.</li>
        <li><strong>.NET Core:</strong> A complete rewrite released in 2016. Cross-platform (runs on Linux/Mac), open-source, and extremely fast.</li>
        <li><strong>.NET 5/6/7+:</strong> The unification of the platform. There is no more "Core" or "Framework", just ".NET". This is the modern standard.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Why Learn C#?</h2>
      <ul className={styles.list}>
        <li><strong>Game Development:</strong> C# is the primary language for <strong>Unity</strong>, the world's most popular game engine.</li>
        <li><strong>Enterprise Web Apps:</strong> ASP.NET Core is incredibly fast and widely used for backend APIs and microservices.</li>
        <li><strong>Desktop Apps:</strong> Build Windows apps with WPF or WinUI, and cross-platform apps with MAUI.</li>
        <li><strong>Cloud Native:</strong> Deep integration with Microsoft Azure makes it a top choice for cloud computing.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>C# vs Java</h2>
      <table className={styles.table}>
        <thead><tr><th>Feature</th><th>C#</th><th>Java</th></tr></thead>
        <tbody>
          <tr><td><strong>Origin</strong></td><td>Microsoft</td><td>Sun Microsystems (Oracle)</td></tr>
          <tr><td><strong>Properties</strong></td><td>Native Properties <code>{`{ get; set; }`}</code></td><td>Getter/Setter Methods</td></tr>
          <tr><td><strong>LINQ</strong></td><td>Built-in Query Language (Powerful)</td><td>Streams API (Verbose)</td></tr>
          <tr><td><strong>Structs</strong></td><td>True Value Types</td><td>Only Classes (mostly)</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>How It Works (CLR)</h2>
      <p>
        Like Java, C# is compiled into an intermediate language (IL).
      </p>
      <ol>
        <li><strong>Source Code:</strong> You write <code>.cs</code> files.</li>
        <li><strong>Compiler (Roslyn):</strong> Compiles code into a <code>.dll</code> or <code>.exe</code> containing IL (Intermediate Language).</li>
        <li><strong>CLR (Common Language Runtime):</strong> When run, the JIT (Just-In-Time) compiler translates IL into native machine code for your specific CPU.</li>
      </ol>

      <div className={styles.navigationButtons}>
        <Link to="/courses"><button className={styles.prevButton}>❮ Course Menu</button></Link>
        <Link to="/course/csharp/get-started"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpIntro;