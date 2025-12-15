import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpGetStarted = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Getting Started</h1>
      <p className={styles.introParagraph}>
        To write C#, you need the .NET SDK (Software Development Kit). Unlike the old days, you don't need a massive Visual Studio installation; you can use the lightweight VS Code.
      </p>

      <h2 className={styles.subsectionTitle}>1. Install the .NET SDK</h2>
      <p>
        Go to the official Microsoft .NET download page and download the <strong>.NET SDK</strong> (not just the Runtime).
      </p>
      <div className={styles.codeBlock}>
        <code>
          # Verify installation<br/>
          dotnet --version
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>2. Your First Project (CLI)</h2>
      <p>
        The <code>dotnet</code> command line interface (CLI) is powerful. Let's create a new console application.
      </p>
      <div className={styles.codeBlock}>
        <code>
          # Create new folder<br/>
          mkdir HelloWorld<br/>
          cd HelloWorld<br/><br/>
          # Create new console app<br/>
          dotnet new console
        </code>
      </div>
      <p>
        This creates two important files:
      </p>
      <ul>
        <li><strong>Program.cs:</strong> Your actual C# source code.</li>
        <li><strong>HelloWorld.csproj:</strong> The project file containing settings and dependencies.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>3. Writing Code</h2>
      <p>
        Open <code>Program.cs</code>. In modern .NET 6+, you might see "Top-Level Statements" which remove the boilerplate.
      </p>
      
      <p><strong>Modern Style (.NET 6+):</strong></p>
      <div className={styles.codeBlock}>
        <code>
          // Program.cs<br/>
          Console.WriteLine("Hello, World!");
        </code>
      </div>

      <p><strong>Classic Style (Legacy but common):</strong></p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace HelloWorld {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello World!");
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>4. Running the Code</h2>
      <p>
        To run your application, simply use the run command in your terminal inside the project folder:
      </p>
      <div className={styles.codeBlock}>
        <code>dotnet run</code>
      </div>
      <p>This will compile the code, create an executable in the <code>bin</code> folder, and execute it.</p>

      <h2 className={styles.subsectionTitle}>IDEs</h2>
      <ul>
        <li><strong>Visual Studio 2022:</strong> The heavy-hitter. Best for enterprise work, huge memory usage.</li>
        <li><strong>VS Code:</strong> Fast, free, cross-platform. Requires the "C# Dev Kit" extension.</li>
        <li><strong>Rider:</strong> Paid IDE by JetBrains. Loved by game developers (Unity/Unreal).</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/introduction"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/syntax"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpGetStarted;