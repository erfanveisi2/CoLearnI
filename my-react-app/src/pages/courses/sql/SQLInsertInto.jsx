import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLInsertInto = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL INSERT INTO Statement</h1>
      <p className={styles.introParagraph}>
        The <code>INSERT INTO</code> statement is used to insert new records in a table.
        This is one of the fundamental operations for adding data to your database and is essential for any application that stores information.
      </p>

      <h2 className={styles.subsectionTitle}>Why INSERT Data?</h2>
      <p>
        Every database starts empty. INSERT is how you populate your tables with data:
      </p>
      <ul className={styles.list}>
        <li><strong>User registration</strong> - Add new user accounts</li>
        <li><strong>Creating records</strong> - Add new orders, products, posts, etc.</li>
        <li><strong>Data migration</strong> - Move data from other sources</li>
        <li><strong>Logging events</strong> - Record system activities</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Syntax Variation 1: Specify Columns (Recommended)</h2>
      <p>
        It is best practice to specify both the column names and the values to be inserted.
        This makes your code more readable, maintainable, and resistant to schema changes.
      </p>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO table_name (column1, column2, column3, ...)<br/>
          VALUES (value1, value2, value3, ...);
        </code>
      </div>

      <TryItYourselfEditor 
        initialCode={`INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

SELECT * FROM Customers;`} 
        language="sql" 
      />

      <h3>Why Specify Columns?</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Clarity</strong></td>
            <td>Makes it obvious which value goes in which column</td>
          </tr>
          <tr>
            <td><strong>Flexibility</strong></td>
            <td>You can insert columns in any order</td>
          </tr>
          <tr>
            <td><strong>Partial inserts</strong></td>
            <td>You can skip columns (they'll be NULL or default)</td>
          </tr>
          <tr>
            <td><strong>Schema resilience</strong></td>
            <td>Works even if table structure changes</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Syntax Variation 2: Implicit Columns (Not Recommended)</h2>
      <p>
        If you are adding values for <strong>all</strong> the columns of the table, you do not need to specify the column names.
        However, you must make sure the order of the values is in the exact same order as the columns in the table.
      </p>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO table_name<br/>
          VALUES (value1, value2, value3, ...);
        </code>
      </div>
      <div className={styles.infoBox}>
        <p><strong>Warning:</strong> This is risky. If the table structure changes (e.g., a new column is added), your code will break. Always specify column names in production code!</p>
      </div>

      <h3>Example of the Risk</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Original table: Customers (ID, Name, City)<br/>
          INSERT INTO Customers VALUES (1, 'John', 'NYC'); -- Works<br/><br/>
          
          -- Later, table changes to: Customers (ID, Name, Email, City)<br/>
          INSERT INTO Customers VALUES (2, 'Jane', 'LA'); -- ERROR! Wrong number of columns
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>What about CustomerID?</h2>
      <p>
        You might notice we didn't specify the <code>CustomerID</code> in the example above.
      </p>
      <p>
        Most tables have an <strong>Auto-Increment</strong> field (like <code>ID</code>) that acts as the Primary Key. 
        The database generates this number automatically when a new record is inserted.
      </p>

      <h3>Auto-Increment Across Databases</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Database</th>
            <th>Syntax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MySQL</strong></td>
            <td><code>AUTO_INCREMENT</code></td>
          </tr>
          <tr>
            <td><strong>PostgreSQL</strong></td>
            <td><code>SERIAL</code> or <code>IDENTITY</code></td>
          </tr>
          <tr>
            <td><strong>SQL Server</strong></td>
            <td><code>IDENTITY(1,1)</code></td>
          </tr>
          <tr>
            <td><strong>SQLite</strong></td>
            <td><code>AUTOINCREMENT</code></td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Insert Data Only in Specific Columns</h2>
      <p>
        It is also possible to only insert data in specific columns. The columns not mentioned will get a <code>NULL</code> value (or a default value if configured).
      </p>
      <TryItYourselfEditor 
        initialCode={`INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

SELECT * FROM Customers;`} 
        language="sql" 
      />

      <p>
        In this example, columns like <code>ContactName</code>, <code>Address</code>, and <code>PostalCode</code> will be NULL (unless they have default values).
      </p>

      <h2 className={styles.subsectionTitle}>Inserting Multiple Rows</h2>
      <p>
        You can insert multiple rows in a single INSERT statement for better performance:
      </p>
      <TryItYourselfEditor 
        initialCode={`INSERT INTO Customers (CustomerName, City, Country)
VALUES 
  ('Company A', 'Berlin', 'Germany'),
  ('Company B', 'Paris', 'France'),
  ('Company C', 'London', 'UK');

SELECT * FROM Customers;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Performance Tip:</strong> Inserting multiple rows in one statement is much faster than multiple single-row inserts. The database can optimize the operation and reduce network overhead.</p>
      </div>

      <h3>Performance Comparison</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Method</th>
            <th>Speed</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single INSERT statements</td>
            <td>Slow</td>
            <td>Interactive user input</td>
          </tr>
          <tr>
            <td>Multiple VALUES in one INSERT</td>
            <td>Fast</td>
            <td>Bulk data loading</td>
          </tr>
          <tr>
            <td>LOAD DATA / BULK INSERT</td>
            <td>Fastest</td>
            <td>Very large data imports</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Data Types and Quoting Rules</h2>
      <p>
        Remember to use proper syntax for different data types:
      </p>

      <h3>String Values</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Products (ProductName, Description)<br/>
          VALUES ('Laptop', 'High-performance laptop');
        </code>
      </div>

      <h3>Numeric Values</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Products (Price, StockQuantity)<br/>
          VALUES (999.99, 50); -- No quotes for numbers
        </code>
      </div>

      <h3>Date Values</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Orders (OrderDate, ShipDate)<br/>
          VALUES ('2024-01-15', '2024-01-20'); -- ISO format: YYYY-MM-DD
        </code>
      </div>

      <h3>NULL Values</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Customers (CustomerName, Phone)<br/>
          VALUES ('John Doe', NULL); -- NULL without quotes
        </code>
      </div>

      <h3>Boolean Values</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Users (Username, IsActive)<br/>
          VALUES ('alice', TRUE); -- TRUE/FALSE or 1/0 depending on database
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>INSERT with SELECT</h2>
      <p>
        You can insert data from another table using a SELECT statement:
      </p>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO CustomerBackup (CustomerName, City, Country)<br/>
          SELECT CustomerName, City, Country<br/>
          FROM Customers<br/>
          WHERE Country = 'Germany';
        </code>
      </div>

      <p>
        This is useful for:
      </p>
      <ul className={styles.list}>
        <li>Creating backups</li>
        <li>Copying data between tables</li>
        <li>Data transformation and migration</li>
        <li>Creating summary tables</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Real-World INSERT Examples</h2>

      <h3>Example 1: User Registration</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Users (Username, Email, PasswordHash, CreatedAt)<br/>
          VALUES ('john_doe', 'john@example.com', 'hashed_password_here', NOW());
        </code>
      </div>

      <h3>Example 2: E-commerce Order</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Orders (CustomerID, OrderDate, TotalAmount, Status)<br/>
          VALUES (101, '2024-01-15', 299.99, 'Pending');
        </code>
      </div>

      <h3>Example 3: Blog Post</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO BlogPosts (Title, Content, AuthorID, PublishedDate)<br/>
          VALUES (<br/>
          &nbsp;&nbsp;'SQL Tutorial',<br/>
          &nbsp;&nbsp;'This is a comprehensive guide to SQL...',<br/>
          &nbsp;&nbsp;5,<br/>
          &nbsp;&nbsp;'2024-01-15'<br/>
          );
        </code>
      </div>

      <h3>Example 4: Social Media Post</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Posts (UserID, Content, Likes, CreatedAt)<br/>
          VALUES (42, 'Just learned SQL INSERT! 🎉', 0, NOW());
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Getting the Last Inserted ID</h2>
      <p>
        After inserting a row with an auto-increment ID, you often need to retrieve that ID:
      </p>

      <h3>MySQL</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Customers (CustomerName) VALUES ('New Customer');<br/>
          SELECT LAST_INSERT_ID();
        </code>
      </div>

      <h3>SQL Server</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Customers (CustomerName) VALUES ('New Customer');<br/>
          SELECT SCOPE_IDENTITY();
        </code>
      </div>

      <h3>PostgreSQL</h3>
      <div className={styles.codeBlock}>
        <code>
          INSERT INTO Customers (CustomerName)<br/>
          VALUES ('New Customer')<br/>
          RETURNING CustomerID;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common INSERT Errors</h2>

      <h3>Error 1: Column Count Mismatch</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: 3 columns but 2 values<br/>
          INSERT INTO Customers (Name, City, Country)<br/>
          VALUES ('John', 'NYC'); -- ERROR!<br/><br/>
          
          -- CORRECT: Match columns to values<br/>
          INSERT INTO Customers (Name, City, Country)<br/>
          VALUES ('John', 'NYC', 'USA');
        </code>
      </div>

      <h3>Error 2: Data Type Mismatch</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: String in numeric column<br/>
          INSERT INTO Products (ProductName, Price)<br/>
          VALUES ('Laptop', 'expensive'); -- ERROR!<br/><br/>
          
          -- CORRECT: Use proper data type<br/>
          INSERT INTO Products (ProductName, Price)<br/>
          VALUES ('Laptop', 999.99);
        </code>
      </div>

      <h3>Error 3: Violating Constraints</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Duplicate primary key<br/>
          INSERT INTO Customers (CustomerID, CustomerName)<br/>
          VALUES (1, 'John'); -- ERROR if ID 1 already exists<br/><br/>
          
          -- CORRECT: Let auto-increment handle it<br/>
          INSERT INTO Customers (CustomerName)<br/>
          VALUES ('John');
        </code>
      </div>

      <h3>Error 4: Missing Required Fields</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Email is required but not provided<br/>
          INSERT INTO Users (Username)<br/>
          VALUES ('john'); -- ERROR if Email is NOT NULL<br/><br/>
          
          -- CORRECT: Include all required fields<br/>
          INSERT INTO Users (Username, Email)<br/>
          VALUES ('john', 'john@example.com');
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>INSERT Best Practices</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Always specify column names</strong> - Makes code maintainable</li>
        <li>✅ <strong>Use transactions for multiple inserts</strong> - Ensures data consistency</li>
        <li>✅ <strong>Validate data before inserting</strong> - Prevent constraint violations</li>
        <li>✅ <strong>Use prepared statements</strong> - Prevents SQL injection attacks</li>
        <li>✅ <strong>Batch multiple inserts</strong> - Better performance for bulk operations</li>
        <li>❌ <strong>Don't insert without validation</strong> - Can corrupt your data</li>
        <li>❌ <strong>Don't concatenate user input</strong> - Major security vulnerability</li>
      </ul>

      <h2 className={styles.subsectionTitle}>INSERT with Transactions</h2>
      <p>
        For operations that involve multiple inserts, use transactions to ensure all-or-nothing execution:
      </p>
      <div className={styles.codeBlock}>
        <code>
          BEGIN TRANSACTION;<br/><br/>
          
          INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)<br/>
          VALUES (5, '2024-01-15', 299.99);<br/><br/>
          
          INSERT INTO OrderItems (OrderID, ProductID, Quantity)<br/>
          VALUES (LAST_INSERT_ID(), 101, 2);<br/><br/>
          
          COMMIT; -- If all successful<br/>
          -- ROLLBACK; -- If any fails
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try these INSERT challenges:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Insert a single customer
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Tech Corp', 'San Francisco', 'USA');

-- Exercise 2: Insert multiple products at once
INSERT INTO Products (ProductName, Price, StockQuantity)
VALUES 
  ('Mouse', 29.99, 100),
  ('Keyboard', 79.99, 50),
  ('Monitor', 299.99, 25);

-- Exercise 3: Insert with some NULL values
INSERT INTO Employees (FirstName, LastName, Department)
VALUES ('Jane', 'Smith', NULL);

SELECT * FROM Customers;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Security Warning:</strong> Never concatenate user input directly into INSERT statements! Always use parameterized queries (prepared statements) to prevent SQL injection attacks.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/order-by"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/null-values"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLInsertInto;