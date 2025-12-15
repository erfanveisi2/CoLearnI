import React, { useState, useEffect, useRef } from 'react';
import styles from './TryItYourselfEditor.module.css';

const TryItYourselfEditor = ({ initialCode, language = 'html' }) => {
  const [code, setCode] = useState(initialCode);
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState('');
  const [iframeContent, setIframeContent] = useState('');
  const [pyodideReady, setPyodideReady] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const pyodideRef = useRef(null);

  // Load Pyodide for Python execution
  useEffect(() => {
    if (language === 'python' && !pyodideRef.current) {
      const loadPyodide = async () => {
        try {
          // Load Pyodide from CDN
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.async = true;

          script.onload = async () => {
            if (window.loadPyodide) {
              pyodideRef.current = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
              });
              setPyodideReady(true);
            }
          };

          document.body.appendChild(script);
        } catch (error) {
          console.error('Failed to load Pyodide:', error);
        }
      };

      loadPyodide();
    }
  }, [language]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const runCode = async () => {
    setShowOutput(true);

    if (language === 'html') {
      // For HTML, set iframe content directly
      setIframeContent(code);
    } else if (language === 'javascript') {
      // For JavaScript, wrap in HTML with console capture
      const jsHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; padding: 10px; }
    .output-line { margin: 5px 0; }
    .error { color: red; }
  </style>
</head>
<body>
  <div id="output"></div>
  <script>
    (function() {
      const outputDiv = document.getElementById('output');

      // Override getElementById to prevent null errors
      const originalGetElementById = document.getElementById;
      document.getElementById = function(id) {
        const element = originalGetElementById.call(document, id);
        if (!element && id !== 'output') {
          // Create a temporary div for non-existent elements
          const tempDiv = document.createElement('div');
          tempDiv.id = id;
          tempDiv.style.display = 'none';
          document.body.appendChild(tempDiv);
          return tempDiv;
        }
        return element;
      };

      // Capture console.log
      const originalLog = console.log;
      console.log = function(...args) {
        const line = document.createElement('div');
        line.className = 'output-line';
        line.textContent = args.map(arg => {
          if (typeof arg === 'object') {
            try { return JSON.stringify(arg, null, 2); }
            catch { return String(arg); }
          }
          return String(arg);
        }).join(' ');
        if (outputDiv) {
          outputDiv.appendChild(line);
        }
        originalLog.apply(console, args);
      };

      // Capture errors
      window.onerror = function(msg, url, line, col, error) {
        const errorLine = document.createElement('div');
        errorLine.className = 'output-line error';
        errorLine.textContent = 'Error: ' + msg;
        if (outputDiv) {
          outputDiv.appendChild(errorLine);
        }
        return true;
      };

      try {
        ${code}
      } catch (error) {
        const errorLine = document.createElement('div');
        errorLine.className = 'output-line error';
        errorLine.textContent = 'Error: ' + error.message;
        if (outputDiv) {
          outputDiv.appendChild(errorLine);
        }
      }
    })();
  </script>
</body>
</html>`;
      setIframeContent(jsHtml);
    } else if (language === 'css') {
      // For CSS, create a demo HTML with the styles
      const cssHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    ${code}
  </style>
</head>
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <p>This is a paragraph with some text to demonstrate CSS styling.</p>
  <div>This is a div element.</div>
  <span>This is a span element.</span>
  <button>Button</button>
  <a href="#">Link</a>
</body>
</html>`;
      setIframeContent(cssHtml);
    } else if (language === 'python') {
      // For Python, use Pyodide for real execution
      await executePythonCode(code);
    } else if (language === 'sql') {
      // For SQL, use simulated execution
      executeSQLCode(code);
    } else if (language === 'java' || language === 'csharp') {
      // For compiled languages, use Judge0 API
      await executeCompiledLanguage(code, language);
    } else {
      // For other languages, show the code in output
      setOutput(`${language.toUpperCase()} Code:\n${code}\n\nNote: Live execution for ${language} requires a backend server.`);
    }
  };

  const executePythonCode = async (pythonCode) => {
    if (!pyodideReady || !pyodideRef.current) {
      setOutput('Loading Python environment... Please try again in a moment.');
      return;
    }

    setIsExecuting(true);
    setOutput('Executing...');

    try {
      // Redirect stdout to capture print statements
      await pyodideRef.current.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);

      // Run the user's code
      await pyodideRef.current.runPythonAsync(pythonCode);

      // Get the output
      const stdout = await pyodideRef.current.runPythonAsync(`
sys.stdout.getvalue()
`);

      setOutput(stdout || 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsExecuting(false);
    }
  };

  const executeSQLCode = (sqlCode) => {
    setIsExecuting(true);
    
    // Simulated database with sample data
    const database = {
      Customers: [
        { CustomerID: 1, CustomerName: 'Alfreds Futterkiste', ContactName: 'Maria Anders', Address: 'Obere Str. 57', City: 'Berlin', PostalCode: '12209', Country: 'Germany', Phone: '030-0074321', Email: 'maria@alfreds.com' },
        { CustomerID: 2, CustomerName: 'Ana Trujillo Emparedados', ContactName: 'Ana Trujillo', Address: 'Avda. de la Constitución 2222', City: 'México D.F.', PostalCode: '05021', Country: 'Mexico', Phone: '(5) 555-4729', Email: 'ana@trujillo.com' },
        { CustomerID: 3, CustomerName: 'Antonio Moreno Taquería', ContactName: 'Antonio Moreno', Address: 'Mataderos 2312', City: 'México D.F.', PostalCode: '05023', Country: 'Mexico', Phone: '(5) 555-3932', Email: 'antonio@moreno.com' },
        { CustomerID: 4, CustomerName: 'Around the Horn', ContactName: 'Thomas Hardy', Address: '120 Hanover Sq.', City: 'London', PostalCode: 'WA1 1DP', Country: 'UK', Phone: '(171) 555-7788', Email: 'thomas@horn.com' },
        { CustomerID: 5, CustomerName: 'Berglunds snabbköp', ContactName: 'Christina Berglund', Address: 'Berguvsvägen 8', City: 'Luleå', PostalCode: 'S-958 22', Country: 'Sweden', Phone: '0921-12 34 65', Email: 'christina@berglunds.com' },
        { CustomerID: 10, CustomerName: 'Bottom-Dollar Marketse', ContactName: 'Elizabeth Lincoln', Address: '23 Tsawassen Blvd.', City: 'Tsawassen', PostalCode: 'T2F 8M4', Country: 'Canada', Phone: '(604) 555-4729', Email: 'elizabeth@bottom.com' },
        { CustomerID: 80, CustomerName: 'Ernst Handel', ContactName: 'Roland Mendel', Address: 'Kirchgasse 6', City: 'Graz', PostalCode: '8010', Country: 'Austria', Phone: '7675-3425', Email: 'roland@ernst.com' },
        { CustomerID: 81, CustomerName: 'Familia Arquibaldo', ContactName: 'Aria Cruz', Address: 'Rua Orós, 92', City: 'São Paulo', PostalCode: '05442-030', Country: 'Brazil', Phone: '(11) 555-9857', Email: 'aria@familia.com' },
        { CustomerID: 90, CustomerName: 'FISSA Fabrica Inter. Salchichas', ContactName: 'Diego Roel', Address: 'C/ Moralzarzal, 86', City: 'Madrid', PostalCode: '28034', Country: 'Spain', Phone: '(91) 555 94 44', Email: 'diego@fissa.com' },
      ],
      Products: [
        { ProductID: 1, ProductName: 'Chai', Price: 18.00, CategoryID: 1, StockQuantity: 39, Discount: null, OnSale: 0, Discontinued: 0 },
        { ProductID: 2, ProductName: 'Chang', Price: 19.00, CategoryID: 1, StockQuantity: 17, Discount: null, OnSale: 0, Discontinued: 0 },
        { ProductID: 3, ProductName: 'Aniseed Syrup', Price: 10.00, CategoryID: 2, StockQuantity: 13, Discount: 2.00, OnSale: 1, Discontinued: 0 },
        { ProductID: 4, ProductName: 'Chef Anton Cajun Seasoning', Price: 22.00, CategoryID: 2, StockQuantity: 53, Discount: null, OnSale: 0, Discontinued: 0 },
        { ProductID: 5, ProductName: 'Chef Anton Gumbo Mix', Price: 21.35, CategoryID: 2, StockQuantity: 0, Discount: null, OnSale: 0, Discontinued: 0 },
        { ProductID: 100, ProductName: 'Laptop Pro', Price: 999.99, CategoryID: 3, StockQuantity: 25, Discount: 50.00, OnSale: 1, Discontinued: 0 },
        { ProductID: 101, ProductName: 'Wireless Mouse', Price: 29.99, CategoryID: 3, StockQuantity: 150, Discount: null, OnSale: 0, Discontinued: 0 },
      ],
      Orders: [
        { OrderID: 1001, CustomerID: 1, OrderDate: '2024-01-15', ShipDate: '2024-01-20', TotalAmount: 299.99, Status: 'Shipped', TrackingNumber: 'TRACK123456' },
        { OrderID: 1002, CustomerID: 2, OrderDate: '2024-01-16', ShipDate: null, TotalAmount: 150.00, Status: 'Pending', TrackingNumber: null },
        { OrderID: 1003, CustomerID: 1, OrderDate: '2023-12-20', ShipDate: '2023-12-22', TotalAmount: 450.00, Status: 'Completed', TrackingNumber: 'TRACK789012' },
      ],
      Employees: [
        { EmployeeID: 1, FirstName: 'Nancy', LastName: 'Davolio', Department: 'Sales', YearsOfService: 8, Salary: 65000 },
        { EmployeeID: 2, FirstName: 'Andrew', LastName: 'Fuller', Department: 'Sales', YearsOfService: 12, Salary: 75000 },
        { EmployeeID: 3, FirstName: 'Janet', LastName: 'Leverling', Department: 'Marketing', YearsOfService: 4, Salary: 55000 },
      ],
      Users: [
        { UserID: 42, Username: 'john_doe', Email: 'john@example.com', Phone: '+1-555-0123', IsActive: 1, CreatedAt: '2023-01-15' },
        { UserID: 43, Username: 'jane_smith', Email: 'jane@example.com', Phone: null, IsActive: 1, CreatedAt: '2023-06-20' },
      ]
    };

    try {
      // Parse the SQL query (simplified parser)
      const queryLower = sqlCode.toLowerCase().trim();
      let result = '';

      // Handle SELECT queries
      if (queryLower.includes('select')) {
        result = executeSelectQuery(sqlCode, database);
      }
      // Handle INSERT queries
      else if (queryLower.includes('insert')) {
        result = executeInsertQuery(sqlCode, database);
      }
      // Handle UPDATE queries
      else if (queryLower.includes('update')) {
        result = executeUpdateQuery(sqlCode, database);
      }
      // Handle DELETE queries
      else if (queryLower.includes('delete')) {
        result = 'DELETE query simulated.\n\n✓ Query executed successfully.\n(Rows would be deleted in a real database)';
      }
      else {
        result = 'SQL query simulated.\n\n✓ Query executed successfully.';
      }

      setOutput(result);
    } catch (error) {
      setOutput(`SQL Error: ${error.message}\n\nPlease check your SQL syntax and try again.`);
    } finally {
      setIsExecuting(false);
    }
  };

  const executeSelectQuery = (query, database) => {
    const queryLower = query.toLowerCase();
    
    // Extract table name
    let tableName = 'Customers'; // default
    const fromMatch = queryLower.match(/from\s+(\w+)/);
    if (fromMatch) {
      tableName = fromMatch[1].charAt(0).toUpperCase() + fromMatch[1].slice(1);
    }

    let data = database[tableName] || [];
    
    if (data.length === 0) {
      return `Table '${tableName}' not found or empty.\n\nAvailable tables: ${Object.keys(database).join(', ')}`;
    }

    // Handle WHERE clause
    if (queryLower.includes('where')) {
      data = applyWhereClause(data, query);
    }

    // Handle ORDER BY clause
    if (queryLower.includes('order by')) {
      data = applyOrderBy(data, query);
    }

    // Handle LIMIT clause
    if (queryLower.includes('limit')) {
      const limitMatch = queryLower.match(/limit\s+(\d+)/);
      if (limitMatch) {
        data = data.slice(0, parseInt(limitMatch[1]));
      }
    }

    // Handle SELECT columns
    let columns = [];
    const selectMatch = query.match(/select\s+(.*?)\s+from/is);
    if (selectMatch) {
      const selectClause = selectMatch[1].trim();
      if (selectClause === '*') {
        columns = data.length > 0 ? Object.keys(data[0]) : [];
      } else {
        columns = selectClause.split(',').map(col => {
          const trimmed = col.trim();
          // Handle aliases (AS keyword)
          if (trimmed.toLowerCase().includes(' as ')) {
            return trimmed.split(/\s+as\s+/i)[1].trim();
          }
          // Handle calculations or functions
          if (trimmed.includes('(') || trimmed.includes('*') || trimmed.includes('+') || trimmed.includes('-')) {
            return trimmed.split(/\s+/)[0].replace(/[()]/g, '');
          }
          return trimmed;
        });
      }
    }

    // Handle COUNT, DISTINCT, etc.
    if (queryLower.includes('count(')) {
      if (queryLower.includes('count(*)')) {
        return `COUNT(*)\n--------\n${data.length}\n\n(${data.length} row${data.length !== 1 ? 's' : ''})`;
      } else if (queryLower.includes('distinct')) {
        const countMatch = query.match(/count\s*\(\s*distinct\s+(\w+)\s*\)/i);
        if (countMatch) {
          const column = countMatch[1];
          const uniqueValues = new Set(data.map(row => row[column]).filter(v => v !== null && v !== undefined));
          return `COUNT(DISTINCT ${column})\n--------\n${uniqueValues.size}\n\n(1 row)`;
        }
      }
    }

    if (queryLower.includes('select distinct') && !queryLower.includes('count')) {
      const distinctMatch = query.match(/select\s+distinct\s+(.*?)\s+from/is);
      if (distinctMatch) {
        const distinctCol = distinctMatch[1].trim();
        if (distinctCol !== '*') {
          const cols = distinctCol.split(',').map(c => c.trim());
          const seen = new Set();
          data = data.filter(row => {
            const key = cols.map(col => row[col]).join('|');
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
        }
      }
    }

    // Format output
    if (data.length === 0) {
      return 'Empty set (0 rows)';
    }

    // Build table
    const selectedData = data.map(row => {
      const newRow = {};
      columns.forEach(col => {
        if (row.hasOwnProperty(col)) {
          newRow[col] = row[col];
        }
      });
      return Object.keys(newRow).length > 0 ? newRow : row;
    });

    return formatTableOutput(selectedData, columns.length > 0 ? columns : Object.keys(selectedData[0]));
  };

  const applyWhereClause = (data, query) => {
    const whereMatch = query.match(/where\s+(.*?)(?:order by|limit|$)/is);
    if (!whereMatch) return data;

    const whereClause = whereMatch[1].trim();
    
    return data.filter(row => {
      // Simple WHERE clause parser
      // Handle: Column = 'Value', Column > Number, Column IS NULL, etc.
      
      // IS NULL / IS NOT NULL
      if (whereClause.match(/(\w+)\s+is\s+null/i)) {
        const match = whereClause.match(/(\w+)\s+is\s+null/i);
        return row[match[1]] === null || row[match[1]] === undefined;
      }
      if (whereClause.match(/(\w+)\s+is\s+not\s+null/i)) {
        const match = whereClause.match(/(\w+)\s+is\s+not\s+null/i);
        return row[match[1]] !== null && row[match[1]] !== undefined;
      }

      // Equals with string
      const equalsMatch = whereClause.match(/(\w+)\s*=\s*'([^']*)'/i);
      if (equalsMatch) {
        return String(row[equalsMatch[1]]) === equalsMatch[2];
      }

      // Equals with number
      const equalsNumMatch = whereClause.match(/(\w+)\s*=\s*(\d+)/i);
      if (equalsNumMatch) {
        return Number(row[equalsNumMatch[1]]) === Number(equalsNumMatch[2]);
      }

      // Greater than
      const gtMatch = whereClause.match(/(\w+)\s*>\s*(\d+)/i);
      if (gtMatch) {
        return Number(row[gtMatch[1]]) > Number(gtMatch[2]);
      }

      // Less than
      const ltMatch = whereClause.match(/(\w+)\s*<\s*(\d+)/i);
      if (ltMatch) {
        return Number(row[ltMatch[1]]) < Number(ltMatch[2]);
      }

      // LIKE
      const likeMatch = whereClause.match(/(\w+)\s+like\s+'([^']*)'/i);
      if (likeMatch) {
        const value = String(row[likeMatch[1]]);
        const pattern = likeMatch[2].replace(/%/g, '.*').replace(/_/g, '.');
        return new RegExp('^' + pattern + '$', 'i').test(value);
      }

      // IN
      const inMatch = whereClause.match(/(\w+)\s+in\s*\((.*?)\)/i);
      if (inMatch) {
        const values = inMatch[2].split(',').map(v => v.trim().replace(/'/g, ''));
        return values.includes(String(row[inMatch[1]]));
      }

      // BETWEEN
      const betweenMatch = whereClause.match(/(\w+)\s+between\s+(\d+)\s+and\s+(\d+)/i);
      if (betweenMatch) {
        const val = Number(row[betweenMatch[1]]);
        return val >= Number(betweenMatch[2]) && val <= Number(betweenMatch[3]);
      }

      // AND condition
      if (whereClause.toLowerCase().includes(' and ')) {
        const conditions = whereClause.split(/\s+and\s+/i);
        return conditions.every(cond => {
          const tempQuery = query.replace(whereClause, cond);
          const filtered = applyWhereClause([row], tempQuery);
          return filtered.length > 0;
        });
      }

      // OR condition
      if (whereClause.toLowerCase().includes(' or ')) {
        const conditions = whereClause.split(/\s+or\s+/i);
        return conditions.some(cond => {
          const tempQuery = query.replace(whereClause, cond);
          const filtered = applyWhereClause([row], tempQuery);
          return filtered.length > 0;
        });
      }

      return true;
    });
  };

  const applyOrderBy = (data, query) => {
    const orderMatch = query.match(/order\s+by\s+(.*?)(?:limit|$)/is);
    if (!orderMatch) return data;

    const orderClause = orderMatch[1].trim();
    const parts = orderClause.split(',').map(p => p.trim());

    return [...data].sort((a, b) => {
      for (const part of parts) {
        const descMatch = part.match(/(\w+)\s+desc/i);
        const column = descMatch ? descMatch[1] : part.replace(/\s+asc/i, '').trim();
        const isDesc = part.toLowerCase().includes('desc');

        const aVal = a[column];
        const bVal = b[column];

        if (aVal === bVal) continue;
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;

        const comparison = aVal > bVal ? 1 : -1;
        return isDesc ? -comparison : comparison;
      }
      return 0;
    });
  };

  const executeInsertQuery = (query, database) => {
    return '✓ Query executed successfully.\n\n1 row inserted.\n\n(In a real database, this would add a new record)';
  };

  const executeUpdateQuery = (query, database) => {
    // Try to estimate how many rows would be affected
    const queryLower = query.toLowerCase();
    let affected = 1;

    if (queryLower.includes('where country')) {
      affected = 3;
    } else if (!queryLower.includes('where')) {
      affected = 'ALL';
    }

    return `✓ Query executed successfully.\n\n${affected} row${affected !== 1 ? 's' : ''} updated.\n\n(In a real database, records would be modified)`;
  };

  const formatTableOutput = (data, columns) => {
    if (data.length === 0) return 'Empty set (0 rows)';

    // Calculate column widths
    const widths = {};
    columns.forEach(col => {
      widths[col] = Math.max(
        col.length,
        ...data.map(row => String(row[col] === null ? 'NULL' : row[col] || '').length)
      );
    });

    // Build header
    let output = columns.map(col => col.padEnd(widths[col])).join(' | ') + '\n';
    output += columns.map(col => '-'.repeat(widths[col])).join('-+-') + '\n';

    // Build rows
    data.forEach(row => {
      output += columns.map(col => {
        const val = row[col] === null ? 'NULL' : row[col];
        return String(val === undefined ? '' : val).padEnd(widths[col]);
      }).join(' | ') + '\n';
    });

    output += `\n(${data.length} row${data.length !== 1 ? 's' : ''})`;
    return output;
  };

  const executeCompiledLanguage = async (code, lang) => {
    setIsExecuting(true);
    setOutput('Compiling and executing...');

    try {
      // Map language names to Judge0 language IDs
      const languageIds = {
        'java': 62,      // Java (OpenJDK 13.0.1)
        'csharp': 51,    // C# (Mono 6.6.0.161)
        'sql': 82        // SQL (SQLite 3.27.2)
      };

      const languageId = languageIds[lang];

      // Submit code to free Judge0 CE API
      const submitResponse = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '26f90499e8msh0c16c98a49e1fa8p141ec4jsne2d8e7e8fb10',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageId,
          stdin: ''
        })
      });

      if (!submitResponse.ok) {
        throw new Error('Failed to submit code for execution');
      }

      const submission = await submitResponse.json();
      const token = submission.token;

      // Poll for result
      let result;
      let attempts = 0;
      const maxAttempts = 10;

      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

        const resultResponse = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '26f90499e8msh0c16c98a49e1fa8p141ec4jsne2d8e7e8fb10',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          }
        });

        result = await resultResponse.json();

        // Status IDs: 1=In Queue, 2=Processing, 3=Accepted, 4=Wrong Answer, 5=Time Limit Exceeded, 6=Compilation Error, etc.
        if (result.status.id > 2) {
          break;
        }

        attempts++;
      }

      if (!result || attempts >= maxAttempts) {
        throw new Error('Execution timeout');
      }

      // Display output
      if (result.stdout) {
        setOutput(result.stdout.trim());
      } else if (result.stderr) {
        setOutput(`Runtime Error:\n${result.stderr.trim()}`);
      } else if (result.compile_output) {
        setOutput(`Compilation Error:\n${result.compile_output.trim()}`);
      } else if (result.message) {
        setOutput(`Error: ${result.message}`);
      } else {
        setOutput('Code executed successfully (no output)');
      }
    } catch (error) {
      console.error('Execution error:', error);
      setOutput(`Error: ${error.message}\n\nPlease check your code syntax and try again.`);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorInner}>
        <h3 className={styles.editorTitle}>Example</h3>
        <div className={styles.editorWrapper}>
        <div className={styles.codeArea}>
          <textarea
            className={styles.codeEditor}
            value={code}
            onChange={handleCodeChange}
            spellCheck="false"
            rows={12}
          />
        </div>
        {showOutput && (
          <div className={styles.outputArea}>
            <div className={styles.outputHeader}>
              <span>Output:</span>
              <button
                className={styles.closeButton}
                onClick={() => setShowOutput(false)}
              >
                ✕
              </button>
            </div>
            {(language === 'html' || language === 'css' || language === 'javascript') ? (
              <iframe
                key={iframeContent}
                className={styles.outputFrame}
                title="Code Output"
                srcDoc={iframeContent}
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <pre className={styles.outputText}>{output}</pre>
            )}
          </div>
        )}
      </div>
      <div className={styles.editorActions}>
        <button
          onClick={runCode}
          className={styles.tryItButton}
          disabled={isExecuting}
        >
          {isExecuting ? '⏳ Executing...' : '▶ Try it Yourself'}
        </button>
        {language === 'python' && !pyodideReady && (
          <span className={styles.loadingText}>Loading Python environment...</span>
        )}
      </div>
      </div>
    </div>
  );
};

export default TryItYourselfEditor;