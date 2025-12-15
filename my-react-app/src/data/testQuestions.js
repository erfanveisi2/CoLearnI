// Final test questions for each course

export const testQuestions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Marking Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<head>", "<title>", "<meta>", "<header>"],
      correctAnswer: 1
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correctAnswer: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<newline>"],
      correctAnswer: 2
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "alt", "src", "longdesc"],
      correctAnswer: 1
    },
    {
      question: "What is the correct HTML for creating a heading with the largest size?",
      options: ["<heading>", "<h6>", "<h1>", "<head>"],
      correctAnswer: 2
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<list>", "<ul>", "<li>"],
      correctAnswer: 2
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        "<body bg='yellow'>",
        "<background>yellow</background>",
        "<body style='background-color:yellow;'>",
        "<body color='yellow'>"
      ],
      correctAnswer: 2
    },
    {
      question: "Which HTML element defines the document's body?",
      options: ["<body>", "<main>", "<content>", "<document>"],
      correctAnswer: 0
    },
    {
      question: "How can you make a numbered list in HTML?",
      options: ["<ul>", "<ol>", "<dl>", "<list>"],
      correctAnswer: 1
    }
  ],

  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 1
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["text-color", "color", "font-color", "text-style"],
      correctAnswer: 1
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: [".demo", "#demo", "*demo", "demo"],
      correctAnswer: 1
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-size", "text-style", "font-weight"],
      correctAnswer: 1
    },
    {
      question: "How do you make text bold in CSS?",
      options: [
        "font-weight: bold;",
        "text-style: bold;",
        "font: bold;",
        "style: bold;"
      ],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: ["color", "bg-color", "background-color", "background"],
      correctAnswer: 2
    },
    {
      question: "How do you add a border in CSS?",
      options: [
        "border-style: solid;",
        "border: 1px solid black;",
        "border-width: 1px;",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      question: "Which CSS property is used to add space inside an element?",
      options: ["margin", "padding", "spacing", "border"],
      correctAnswer: 1
    },
    {
      question: "How do you select all <p> elements in CSS?",
      options: ["p", ".p", "#p", "*p"],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change text alignment?",
      options: ["text-align", "align", "text-style", "alignment"],
      correctAnswer: 0
    }
  ],

  javascript: [
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Oracle", "Google"],
      correctAnswer: 1
    },
    {
      question: "What is the correct syntax for a JavaScript function?",
      options: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "def myFunction()"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var x;", "variable x;", "v x;", "declare x;"],
      correctAnswer: 0
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "-", "=", "x"],
      correctAnswer: 2
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "msgBox('Hello World');",
        "alert('Hello World');",
        "msg('Hello World');",
        "alertBox('Hello World');"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you create an array in JavaScript?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = ['red', 'green', 'blue']",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: [
        "<!-- This is a comment -->",
        "' This is a comment",
        "// This is a comment",
        "/* This is a comment"
      ],
      correctAnswer: 2
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onmouseover", "onclick", "onmouseclick"],
      correctAnswer: 2
    },
    {
      question: "How do you round the number 7.25 to the nearest integer?",
      options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
      correctAnswer: 0
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var txt = new Array(1:'tim',2:'kim',3:'jim')",
        "var txt = new Array:1=('tim')2=('kim')3=('jim')",
        "var txt = new Array('tim','kim','jim')",
        "var txt = new Array='tim','kim','jim'"
      ],
      correctAnswer: 2
    }
  ],

  python: [
    {
      question: "What is Python?",
      options: [
        "A type of snake",
        "A high-level programming language",
        "A database",
        "An operating system"
      ],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to create a function in Python?",
      options: ["func", "function", "def", "define"],
      correctAnswer: 2
    },
    {
      question: "How do you create a variable with the floating number 2.8?",
      options: ["x = 2.8", "float x = 2.8", "x = float(2.8)", "Both A and C"],
      correctAnswer: 3
    },
    {
      question: "Which of the following is used to define a block of code in Python?",
      options: ["Indentation", "Curly braces", "Parentheses", "Brackets"],
      correctAnswer: 0
    },
    {
      question: "How do you insert comments in Python code?",
      options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
      correctAnswer: 2
    },
    {
      question: "What is the output of: print(2 ** 3)?",
      options: ["5", "6", "8", "9"],
      correctAnswer: 2
    },
    {
      question: "Which method is used to remove whitespace from both ends of a string?",
      options: ["trim()", "strip()", "remove()", "cut()"],
      correctAnswer: 1
    },
    {
      question: "What is the correct file extension for Python files?",
      options: [".pyt", ".pt", ".py", ".python"],
      correctAnswer: 2
    },
    {
      question: "How do you create a list in Python?",
      options: [
        "list = (1, 2, 3)",
        "list = [1, 2, 3]",
        "list = {1, 2, 3}",
        "list = <1, 2, 3>"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the len() function do?",
      options: [
        "Returns the length of an object",
        "Returns the last element",
        "Returns the first element",
        "Returns the type of object"
      ],
      correctAnswer: 0
    }
  ],

  react: [
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database",
        "An operating system"
      ],
      correctAnswer: 0
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      correctAnswer: 1
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Standard Extension",
        "JavaScript Extension",
        "Java Syntax Extension"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a component in React?",
      options: [
        "Using a function or class",
        "Using HTML tags",
        "Using CSS",
        "Using XML"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A copy of the real DOM kept in memory",
        "A new browser feature",
        "A programming language",
        "A database"
      ],
      correctAnswer: 0
    },
    {
      question: "What are props in React?",
      options: [
        "Properties passed to components",
        "JavaScript functions",
        "CSS styles",
        "HTML attributes"
      ],
      correctAnswer: 0
    },
    {
      question: "What is state in React?",
      options: [
        "An object that holds data for a component",
        "A CSS property",
        "A JavaScript function",
        "An HTML attribute"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you handle events in React?",
      options: [
        "Using camelCase syntax like onClick",
        "Using lowercase like onclick",
        "Using uppercase like ONCLICK",
        "Events are not supported"
      ],
      correctAnswer: 0
    },
    {
      question: "What hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of useEffect hook?",
      options: [
        "To perform side effects in functional components",
        "To create state",
        "To handle events",
        "To create props"
      ],
      correctAnswer: 0
    }
  ],

  java: [
    {
      question: "What is Java?",
      options: [
        "A coffee brand",
        "An object-oriented programming language",
        "A database",
        "An operating system"
      ],
      correctAnswer: 1
    },
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
      correctAnswer: 2
    },
    {
      question: "What is the extension of a Java source file?",
      options: [".java", ".class", ".jar", ".jav"],
      correctAnswer: 0
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "run()", "main()", "execute()"],
      correctAnswer: 2
    },
    {
      question: "How do you declare a variable in Java?",
      options: [
        "int x = 5;",
        "var x = 5;",
        "x = 5;",
        "declare int x = 5;"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the correct syntax to output 'Hello World' in Java?",
      options: [
        "print('Hello World');",
        "System.out.println('Hello World');",
        "Console.WriteLine('Hello World');",
        "echo 'Hello World';"
      ],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["class", "Class", "className", "new"],
      correctAnswer: 0
    },
    {
      question: "What is inheritance in Java?",
      options: [
        "A mechanism where a class can inherit properties from another class",
        "A way to delete code",
        "A type of loop",
        "A data type"
      ],
      correctAnswer: 0
    },
    {
      question: "Which operator is used to create an object in Java?",
      options: ["create", "new", "object", "make"],
      correctAnswer: 1
    },
    {
      question: "What does JVM stand for?",
      options: [
        "Java Virtual Machine",
        "Java Visual Manager",
        "Java Variable Method",
        "Java Version Manager"
      ],
      correctAnswer: 0
    }
  ],

  csharp: [
    {
      question: "What is C#?",
      options: [
        "A musical note",
        "A programming language developed by Microsoft",
        "A database",
        "An operating system"
      ],
      correctAnswer: 1
    },
    {
      question: "Which company developed C#?",
      options: ["Apple", "Google", "Microsoft", "Oracle"],
      correctAnswer: 2
    },
    {
      question: "What is the correct syntax to output 'Hello World' in C#?",
      options: [
        "print('Hello World');",
        "Console.WriteLine('Hello World');",
        "System.out.println('Hello World');",
        "echo 'Hello World';"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you declare a variable in C#?",
      options: [
        "int x = 5;",
        "var x = 5;",
        "Both A and B",
        "x = 5;"
      ],
      correctAnswer: 2
    },
    {
      question: "Which keyword is used to create a class in C#?",
      options: ["class", "Class", "new", "create"],
      correctAnswer: 0
    },
    {
      question: "What is the correct file extension for C# files?",
      options: [".cs", ".csharp", ".c#", ".csh"],
      correctAnswer: 0
    },
    {
      question: "Which method is the entry point of a C# program?",
      options: ["Start()", "Main()", "Run()", "Execute()"],
      correctAnswer: 1
    },
    {
      question: "How do you create a single-line comment in C#?",
      options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
      correctAnswer: 0
    },
    {
      question: "What does CLR stand for in C#?",
      options: [
        "Common Language Runtime",
        "Common Library Reference",
        "Code Language Runtime",
        "Compiled Language Reference"
      ],
      correctAnswer: 0
    },
    {
      question: "Which keyword is used for inheritance in C#?",
      options: ["extends", "implements", ":", "inherits"],
      correctAnswer: 2
    }
  ],

  sql: [
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "Structured Question Language",
        "Simple Query Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which SQL statement is used to retrieve data from a database?",
      options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
      correctAnswer: 2
    },
    {
      question: "Which SQL clause is used to filter records?",
      options: ["FILTER", "WHERE", "HAVING", "IF"],
      correctAnswer: 1
    },
    {
      question: "What is the correct syntax to select all columns from a table?",
      options: [
        "SELECT all FROM table;",
        "SELECT * FROM table;",
        "GET * FROM table;",
        "FETCH all FROM table;"
      ],
      correctAnswer: 1
    },
    {
      question: "Which SQL statement is used to insert new data into a database?",
      options: ["INSERT INTO", "ADD", "CREATE", "PUT"],
      correctAnswer: 0
    },
    {
      question: "Which SQL statement is used to update data in a database?",
      options: ["MODIFY", "UPDATE", "CHANGE", "SET"],
      correctAnswer: 1
    },
    {
      question: "Which SQL keyword is used to sort the result-set?",
      options: ["SORT", "ORDER BY", "SORT BY", "ARRANGE"],
      correctAnswer: 1
    },
    {
      question: "How do you select unique values from a column?",
      options: [
        "SELECT UNIQUE column FROM table;",
        "SELECT DISTINCT column FROM table;",
        "SELECT DIFFERENT column FROM table;",
        "SELECT SEPARATE column FROM table;"
      ],
      correctAnswer: 1
    },
    {
      question: "Which operator is used to test for NULL values?",
      options: ["= NULL", "IS NULL", "== NULL", "NULL"],
      correctAnswer: 1
    },
    {
      question: "What does the DELETE statement do?",
      options: [
        "Deletes a table",
        "Deletes a database",
        "Deletes rows from a table",
        "Deletes columns from a table"
      ],
      correctAnswer: 2
    }
  ],

  ai: [
    {
      question: "What does AI stand for?",
      options: [
        "Automatic Intelligence",
        "Artificial Intelligence",
        "Advanced Integration",
        "Automated Information"
      ],
      correctAnswer: 1
    },
    {
      question: "What is machine learning?",
      options: [
        "Teaching machines to physically move",
        "A subset of AI that enables systems to learn from data",
        "A type of computer hardware",
        "A programming language"
      ],
      correctAnswer: 1
    },
    {
      question: "What is deep learning?",
      options: [
        "A subset of machine learning using neural networks",
        "Learning in deep water",
        "A type of database",
        "A programming paradigm"
      ],
      correctAnswer: 0
    },
    {
      question: "What is Natural Language Processing (NLP)?",
      options: [
        "Processing natural materials",
        "AI's ability to understand and generate human language",
        "A programming language",
        "A database technology"
      ],
      correctAnswer: 1
    },
    {
      question: "What is computer vision?",
      options: [
        "Computer monitor quality",
        "AI's ability to interpret and understand visual information",
        "A type of graphics card",
        "A programming language"
      ],
      correctAnswer: 1
    },
    {
      question: "Who is considered the father of AI?",
      options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Mark Zuckerberg"],
      correctAnswer: 2
    },
    {
      question: "What is supervised learning?",
      options: [
        "Learning with a teacher present",
        "Machine learning using labeled data",
        "Learning in a supervised environment",
        "A type of unsupervised learning"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a neural network?",
      options: [
        "A network of neurons",
        "A computing system inspired by biological neural networks",
        "A social network",
        "A type of internet connection"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the Turing Test?",
      options: [
        "A test to measure computer speed",
        "A test of a machine's ability to exhibit intelligent behavior",
        "A programming test",
        "A hardware compatibility test"
      ],
      correctAnswer: 1
    },
    {
      question: "What are the main concerns about AI ethics?",
      options: [
        "Bias, privacy, and job displacement",
        "Computer viruses",
        "Internet speed",
        "Hardware costs"
      ],
      correctAnswer: 0
    }
  ]
};
