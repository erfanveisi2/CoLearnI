import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLWhere = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL WHERE Clause</h1>
      <p className={styles.introParagraph}>
        The <code>WHERE</code> clause is used to filter records.
        It extracts only those records that fulfill a specified condition.
        Mastering the WHERE clause is essential for querying specific data from your database efficiently.
      </p>

      <h2 className={styles.subsectionTitle}>Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name<br/>
          WHERE condition;
        </code>
      </div>
      <p>
        <strong>Note:</strong> The WHERE clause is not only used in SELECT statements, but it is also used in UPDATE, DELETE, etc.!
      </p>

      <h2 className={styles.subsectionTitle}>Why Use WHERE?</h2>
      <p>
        Without a WHERE clause, your query returns <em>all</em> rows from the table. In a table with millions of records, 
        this would be extremely slow and wasteful. The WHERE clause allows you to:
      </p>
      <ul className={styles.list}>
        <li><strong>Filter data</strong> - Retrieve only the rows you need</li>
        <li><strong>Improve performance</strong> - Less data to process and transfer</li>
        <li><strong>Target specific records</strong> - For updates or deletions</li>
        <li><strong>Make precise queries</strong> - Answer specific business questions</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Example: Filtering by Text</h2>
      <p>The following SQL statement selects all the customers from the country "Mexico":</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Mexico';`} 
        language="sql" 
      />

      <p>
        This query scans through the Customers table and returns only the rows where the Country column equals 'Mexico'.
        If you have 91 customers total and 5 are from Mexico, this query returns only those 5 rows.
      </p>

      <h2 className={styles.subsectionTitle}>Text Fields vs Numeric Fields</h2>
      <p>
        SQL requires <strong>single quotes</strong> around text values (most database systems will also allow double quotes).
        However, numeric fields should not be enclosed in quotes:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers WHERE CustomerID = 1; -- Correct<br/>
          -- SELECT * FROM Customers WHERE CustomerID = '1'; -- May work but not recommended
        </code>
      </div>

      <h3>Data Type Comparison Rules</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Example</th>
            <th>Needs Quotes?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>String/Text</strong></td>
            <td><code>WHERE Name = 'John'</code></td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Integer</strong></td>
            <td><code>WHERE Age = 25</code></td>
            <td>❌ No</td>
          </tr>
          <tr>
            <td><strong>Decimal</strong></td>
            <td><code>WHERE Price = 19.99</code></td>
            <td>❌ No</td>
          </tr>
          <tr>
            <td><strong>Date</strong></td>
            <td><code>WHERE BirthDate = '1990-01-01'</code></td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Boolean</strong></td>
            <td><code>WHERE Active = TRUE</code></td>
            <td>❌ No (varies by database)</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Comparison Operators</h2>
      <p>The following operators can be used in the WHERE clause:</p>
      <table className={styles.table}>
        <thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><code>=</code></td><td>Equal</td><td><code>WHERE Country = 'USA'</code></td></tr>
          <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>WHERE Price &gt; 100</code></td></tr>
          <tr><td><code>&lt;</code></td><td>Less than</td><td><code>WHERE Age &lt; 18</code></td></tr>
          <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>WHERE Quantity &gt;= 10</code></td></tr>
          <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>WHERE Score &lt;= 100</code></td></tr>
          <tr><td><code>&lt;&gt;</code> or <code>!=</code></td><td>Not equal</td><td><code>WHERE Status &lt;&gt; 'Inactive'</code></td></tr>
          <tr><td><code>BETWEEN</code></td><td>Between a range (inclusive)</td><td><code>WHERE Price BETWEEN 10 AND 20</code></td></tr>
          <tr><td><code>LIKE</code></td><td>Search for a pattern</td><td><code>WHERE Name LIKE 'J%'</code></td></tr>
          <tr><td><code>IN</code></td><td>Multiple possible values</td><td><code>WHERE Country IN ('USA', 'UK')</code></td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Numeric Comparisons</h2>
      
      <h3>Example: Greater Than</h3>
      <p>Selects all customers with a CustomerID greater than 80:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE CustomerID > 80;`} 
        language="sql" 
      />

      <h3>Example: Less Than</h3>
      <p>Find all products with a price less than $20:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT ProductName, Price FROM Products
WHERE Price < 20;`} 
        language="sql" 
      />

      <h3>Example: Greater Than or Equal</h3>
      <p>Find customers with an ID of 50 or higher:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          WHERE CustomerID &gt;= 50;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The BETWEEN Operator</h2>
      <p>
        BETWEEN selects values within a given range. The values can be numbers, text, or dates.
        The BETWEEN operator is <strong>inclusive</strong> - it includes the boundary values.
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;`} 
        language="sql" 
      />

      <p>This is equivalent to:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Products<br/>
          WHERE Price &gt;= 10 AND Price &lt;= 20;
        </code>
      </div>

      <h3>NOT BETWEEN</h3>
      <p>To exclude a range, use NOT BETWEEN:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Products<br/>
          WHERE Price NOT BETWEEN 10 AND 20;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The IN Operator</h2>
      <p>
        The IN operator allows you to specify multiple values in a WHERE clause.
        It's a shorthand for multiple OR conditions.
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');`} 
        language="sql" 
      />

      <p>This is much cleaner than:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          WHERE Country = 'Germany' OR Country = 'France' OR Country = 'UK';
        </code>
      </div>

      <h3>NOT IN</h3>
      <p>Exclude multiple values:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          WHERE Country NOT IN ('Germany', 'France', 'UK');
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The LIKE Operator</h2>
      <p>
        The LIKE operator is used to search for a specified pattern in a column.
        It uses two wildcards:
      </p>
      <ul className={styles.list}>
        <li><code>%</code> - Represents zero, one, or multiple characters</li>
        <li><code>_</code> - Represents a single character</li>
      </ul>

      <h3>Pattern Examples</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pattern</th>
            <th>Description</th>
            <th>Matches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>LIKE 'a%'</code></td>
            <td>Starts with "a"</td>
            <td>apple, avocado, amazing</td>
          </tr>
          <tr>
            <td><code>LIKE '%a'</code></td>
            <td>Ends with "a"</td>
            <td>pizza, data, banana</td>
          </tr>
          <tr>
            <td><code>LIKE '%or%'</code></td>
            <td>Contains "or"</td>
            <td>order, work, morning</td>
          </tr>
          <tr>
            <td><code>LIKE '_r%'</code></td>
            <td>Second character is "r"</td>
            <td>brown, trust,frica</td>
          </tr>
          <tr>
            <td><code>LIKE 'a_%_%'</code></td>
            <td>Starts with "a", at least 3 chars</td>
            <td>abc, amazing, apple</td>
          </tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`-- Find customers whose name starts with 'A'
SELECT * FROM Customers
WHERE CustomerName LIKE 'A%';`} 
        language="sql" 
      />

      <h3>Case Sensitivity in LIKE</h3>
      <p>
        Whether LIKE is case-sensitive depends on your database:
      </p>
      <ul className={styles.list}>
        <li><strong>MySQL:</strong> Case-insensitive by default</li>
        <li><strong>PostgreSQL:</strong> Case-sensitive (use ILIKE for case-insensitive)</li>
        <li><strong>SQL Server:</strong> Depends on collation</li>
      </ul>

      <h2 className={styles.subsectionTitle}>IS NULL and IS NOT NULL</h2>
      <p>
        To test for NULL values, you cannot use = or !=. You must use IS NULL or IS NOT NULL.
      </p>
      <TryItYourselfEditor 
        initialCode={`-- Find customers without a phone number
SELECT * FROM Customers
WHERE Phone IS NULL;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Important:</strong> <code>WHERE Column = NULL</code> will NOT work! Always use <code>IS NULL</code> or <code>IS NOT NULL</code>.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Real-World WHERE Examples</h2>
      
      <h3>Example 1: E-commerce - Find Expensive Products</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT ProductName, Price<br/>
          FROM Products<br/>
          WHERE Price &gt; 100<br/>
          ORDER BY Price DESC;
        </code>
      </div>

      <h3>Example 2: HR - Find Young Employees</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT FirstName, LastName, Age<br/>
          FROM Employees<br/>
          WHERE Age &lt; 30;
        </code>
      </div>

      <h3>Example 3: Sales - Find Recent Orders</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT OrderID, OrderDate, TotalAmount<br/>
          FROM Orders<br/>
          WHERE OrderDate &gt;= '2024-01-01';
        </code>
      </div>

      <h3>Example 4: User Management - Find Active Premium Users</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT Username, Email<br/>
          FROM Users<br/>
          WHERE Status = 'Active' AND AccountType = 'Premium';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>WHERE with Date Values</h2>
      <p>
        Date comparisons require quotes and proper formatting. The standard SQL date format is 'YYYY-MM-DD':
      </p>
      <TryItYourselfEditor 
        initialCode={`-- Find orders from 2024
SELECT * FROM Orders
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01';`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Performance Tips</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Use indexes:</strong> Columns used in WHERE clauses should be indexed</li>
        <li>✅ <strong>Be specific:</strong> More specific conditions = faster queries</li>
        <li>✅ <strong>Avoid functions on columns:</strong> <code>WHERE YEAR(OrderDate) = 2024</code> is slower than <code>WHERE OrderDate >= '2024-01-01'</code></li>
        <li>❌ <strong>Avoid LIKE with leading %:</strong> <code>WHERE Name LIKE '%son'</code> cannot use indexes</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Common WHERE Mistakes</h2>
      
      <h3>Mistake 1: Forgetting Quotes on Strings</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG<br/>
          SELECT * FROM Customers WHERE Country = Mexico;<br/><br/>
          
          -- CORRECT<br/>
          SELECT * FROM Customers WHERE Country = 'Mexico';
        </code>
      </div>

      <h3>Mistake 2: Using = with NULL</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG<br/>
          SELECT * FROM Customers WHERE Phone = NULL;<br/><br/>
          
          -- CORRECT<br/>
          SELECT * FROM Customers WHERE Phone IS NULL;
        </code>
      </div>

      <h3>Mistake 3: Confusing = and ==</h3>
      <p>
        In SQL, use a single equals sign (=) for comparison. Double equals (==) is not valid SQL (it's used in programming languages like JavaScript).
      </p>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try writing WHERE clauses for these scenarios:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Find all customers from USA
SELECT * FROM Customers WHERE Country = 'USA';

-- Exercise 2: Find products with price between 10 and 50
SELECT * FROM Products WHERE Price BETWEEN 10 AND 50;

-- Exercise 3: Find customers whose name starts with 'M'
SELECT * FROM Customers WHERE CustomerName LIKE 'M%';`} 
        language="sql" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/select-distinct"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/and-or-not"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLWhere;