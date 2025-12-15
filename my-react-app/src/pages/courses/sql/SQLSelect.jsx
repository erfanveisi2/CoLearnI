import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLSelect = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL SELECT Statement</h1>
      <p className={styles.introParagraph}>
        The <code>SELECT</code> statement is used to select data from a database.
        The data returned is stored in a result table, called the result-set.
        SELECT is the most commonly used SQL command and forms the foundation of data retrieval operations.
      </p>

      <h2 className={styles.subsectionTitle}>Basic Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name;
        </code>
      </div>
      <p>
        Here, <code>column1</code>, <code>column2</code>, ... are the field names of the table you want to select data from.
        The FROM clause specifies which table to retrieve the data from.
      </p>

      <h2 className={styles.subsectionTitle}>Understanding the Result-Set</h2>
      <p>
        When you execute a SELECT statement, the database returns a <strong>result-set</strong>, which is essentially a temporary table containing the requested data.
        This result-set can have zero rows (if no data matches) or millions of rows (if many records match your query).
      </p>
      <p>
        The result-set includes:
      </p>
      <ul className={styles.list}>
        <li><strong>Column Headers</strong> - The names of the columns you selected</li>
        <li><strong>Data Rows</strong> - The actual data from the database</li>
        <li><strong>Metadata</strong> - Information about the data types and sizes (not always visible)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Example: Selecting Specific Columns</h2>
      <p>
        Often, you don't need all the data. Selecting only what you need improves performance.
        Let's select only the "CustomerName" and "City" from the Customers table:
      </p>

      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName, City 
FROM Customers;`} 
        language="sql" 
      />

      <p>
        This query will return a result-set with only two columns: CustomerName and City. All other columns in the Customers table are ignored.
      </p>

      <h2 className={styles.subsectionTitle}>Selecting Three or More Columns</h2>
      <p>
        You can select as many columns as you need by separating them with commas:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName, ContactName, Address, City, Country 
FROM Customers;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Tip:</strong> Always select only the columns you actually need. This reduces network traffic, memory usage, and improves query performance.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Select All Columns (*)</h2>
      <p>
        If you want to select all the available columns from the "Customers" table, use the asterisk (*) wildcard:
      </p>
      <div className={styles.codeBlock}>
        <code>SELECT * FROM table_name;</code>
      </div>
      <p>Example:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers;`} 
        language="sql" 
      />

      <p>
        The asterisk (*) is a wildcard that represents "all columns". This is convenient for quick queries and testing,
        but should generally be avoided in production code.
      </p>

      <h2 className={styles.subsectionTitle}>Why Avoid SELECT *?</h2>
      <div className={styles.infoBox}>
        <p><strong>Performance Warning:</strong> While <code>SELECT *</code> is useful for testing, using it in a production application can be slow if the table has millions of rows or very wide columns (like images). Always specify the columns you need.</p>
      </div>

      <p>Here are specific reasons to avoid SELECT *:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Description</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Performance</strong></td>
            <td>Retrieves unnecessary data</td>
            <td>Slower queries, higher bandwidth usage</td>
          </tr>
          <tr>
            <td><strong>Maintenance</strong></td>
            <td>Code breaks when table structure changes</td>
            <td>If a column is added/removed, your app may fail</td>
          </tr>
          <tr>
            <td><strong>Security</strong></td>
            <td>May expose sensitive data</td>
            <td>Could accidentally retrieve password hashes, etc.</td>
          </tr>
          <tr>
            <td><strong>Memory</strong></td>
            <td>Uses more RAM on the server and client</td>
            <td>Can cause out-of-memory errors with large datasets</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Column Aliases</h2>
      <p>
        You can give a column a temporary name (alias) in the result-set using the <code>AS</code> keyword:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName AS Customer, City AS Location
FROM Customers;`} 
        language="sql" 
      />

      <p>
        The AS keyword is optional. You can also write:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT CustomerName Customer, City Location<br/>
          FROM Customers;
        </code>
      </div>

      <p>
        Aliases are useful for:
      </p>
      <ul className={styles.list}>
        <li>Making column names more readable in the result-set</li>
        <li>Shortening long column names</li>
        <li>Giving calculated columns meaningful names</li>
        <li>Avoiding name conflicts when joining multiple tables</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Using Expressions in SELECT</h2>
      <p>
        You can perform calculations or operations within a SELECT statement:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT ProductName, Price, Price * 1.1 AS PriceWithTax
FROM Products;`} 
        language="sql" 
      />

      <p>
        This query calculates a new column "PriceWithTax" by multiplying the Price by 1.1 (adding 10% tax).
      </p>

      <h2 className={styles.subsectionTitle}>String Concatenation in SELECT</h2>
      <p>
        You can combine multiple columns into one. The syntax varies by database:
      </p>

      <h3>MySQL/MariaDB:</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT CONCAT(FirstName, ' ', LastName) AS FullName<br/>
          FROM Employees;
        </code>
      </div>

      <h3>SQL Server:</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT FirstName + ' ' + LastName AS FullName<br/>
          FROM Employees;
        </code>
      </div>

      <h3>PostgreSQL:</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT FirstName || ' ' || LastName AS FullName<br/>
          FROM Employees;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Selecting Literal Values</h2>
      <p>
        You can select literal values (constants) in addition to columns:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT 'Customer', CustomerName, 2024 AS Year
FROM Customers;`} 
        language="sql" 
      />

      <p>
        This adds a constant value 'Customer' as the first column and the number 2024 as a column named "Year" to every row in the result.
      </p>

      <h2 className={styles.subsectionTitle}>Common SELECT Patterns</h2>
      
      <h3>Pattern 1: Quick Data Preview</h3>
      <p>View a sample of data from a table:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers LIMIT 10; -- MySQL/PostgreSQL<br/>
          SELECT TOP 10 * FROM Customers; -- SQL Server
        </code>
      </div>

      <h3>Pattern 2: Column Inspection</h3>
      <p>Check what values exist in a specific column:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT DISTINCT Country FROM Customers;
        </code>
      </div>

      <h3>Pattern 3: Count Records</h3>
      <p>See how many records exist:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT COUNT(*) AS TotalCustomers FROM Customers;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Best Practices for SELECT Statements</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Be Specific:</strong> Always list the columns you need explicitly</li>
        <li>✅ <strong>Use Aliases:</strong> Give clear, meaningful names to calculated columns</li>
        <li>✅ <strong>Format Properly:</strong> Use line breaks and indentation for readability</li>
        <li>✅ <strong>Add Comments:</strong> Explain complex queries with SQL comments</li>
        <li>❌ <strong>Avoid SELECT *:</strong> Especially in production applications</li>
        <li>❌ <strong>Don't Retrieve Unused Data:</strong> If you don't need it, don't select it</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Practice Exercise</h2>
      <p>
        Try modifying the query below to select different columns and add aliases:
      </p>
      <TryItYourselfEditor 
        initialCode={`-- Try selecting different combinations:
-- 1. Only CustomerName
-- 2. CustomerName and Country with aliases
-- 3. All columns from Customers

SELECT CustomerName, City, Country
FROM Customers;`} 
        language="sql" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/syntax"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/select-distinct"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLSelect;