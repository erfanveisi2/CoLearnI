import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const SQLUpdate = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL UPDATE Statement</h1>
      <p className={styles.introParagraph}>
        The <code>UPDATE</code> statement is used to modify the existing records in a table.
        This is one of the most powerful and dangerous SQL commands - powerful because it can change data efficiently, 
        dangerous because one mistake can corrupt your entire database.
      </p>

      <div className={styles.infoBox} style={{borderColor: 'red'}}>
        <p style={{color: 'red'}}><strong>CRITICAL WARNING:</strong> Be careful when updating records. If you omit the <code>WHERE</code> clause, <strong>ALL records</strong> in the table will be updated!</p>
      </div>

      <h2 className={styles.subsectionTitle}>Why UPDATE Data?</h2>
      <p>
        UPDATE is essential for maintaining accurate, up-to-date information:
      </p>
      <ul className={styles.list}>
        <li><strong>User profile changes</strong> - Update email, phone, address</li>
        <li><strong>Status changes</strong> - Mark orders as shipped, users as inactive</li>
        <li><strong>Data corrections</strong> - Fix typos or incorrect information</li>
        <li><strong>Inventory management</strong> - Update stock quantities after sales</li>
        <li><strong>Price changes</strong> - Update product prices</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Basic Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          UPDATE table_name<br/>
          SET column1 = value1, column2 = value2, ...<br/>
          WHERE condition;
        </code>
      </div>

      <ul className={styles.list}>
        <li><code>UPDATE</code> - Specifies which table to update</li>
        <li><code>SET</code> - Defines which columns to change and their new values</li>
        <li><code>WHERE</code> - Filters which rows to update (CRUCIAL!)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Update Single Record</h2>
      <p>
        The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.
      </p>
      <TryItYourselfEditor 
        initialCode={`UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;

SELECT * FROM Customers WHERE CustomerID = 1;`} 
        language="sql" 
      />

      <p>
        This updates only the row where CustomerID equals 1. All other rows remain unchanged.
      </p>

      <h3>Step-by-Step Breakdown</h3>
      <ol className={styles.list}>
        <li><strong>UPDATE Customers</strong> - Target the Customers table</li>
        <li><strong>SET ContactName = 'Alfred Schmidt'</strong> - Change ContactName</li>
        <li><strong>SET City = 'Frankfurt'</strong> - Also change City</li>
        <li><strong>WHERE CustomerID = 1</strong> - Only for this specific customer</li>
      </ol>

      <h2 className={styles.subsectionTitle}>Update Multiple Columns</h2>
      <p>
        You can update multiple columns in one statement by separating them with commas:
      </p>
      <TryItYourselfEditor 
        initialCode={`UPDATE Products
SET Price = 19.99, 
    StockQuantity = 100, 
    LastUpdated = NOW()
WHERE ProductID = 5;

SELECT * FROM Products WHERE ProductID = 5;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Update Multiple Records</h2>
      <p>
        It is the <code>WHERE</code> clause that determines how many records will be updated.
        The following SQL statement will update the ContactName to "Juan" for all records where the country is "Mexico".
      </p>
      <TryItYourselfEditor 
        initialCode={`UPDATE Customers
SET ContactName = 'Juan'
WHERE Country = 'Mexico';

SELECT * FROM Customers WHERE Country = 'Mexico';`} 
        language="sql" 
      />

      <p>
        This will update multiple rows at once - every customer from Mexico will have their ContactName changed.
      </p>

      <h3>How Many Rows Were Updated?</h3>
      <p>
        Most database systems tell you how many rows were affected:
      </p>
      <div className={styles.codeBlock}>
        <code>
          -- MySQL/PostgreSQL response:<br/>
          Query OK, 5 rows affected (0.01 sec)<br/><br/>
          
          -- SQL Server: Use @@ROWCOUNT<br/>
          UPDATE Customers SET ContactName = 'Juan' WHERE Country = 'Mexico';<br/>
          SELECT @@ROWCOUNT AS RowsAffected;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The "Update All" Disaster</h2>
      <p>
        If you run the query below, EVERY customer in the database will have their name changed to "Juan".
        This is a common disaster in production databases.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          UPDATE Customers<br/>
          SET ContactName = 'Juan'; -- NO WHERE CLAUSE!<br/><br/>
          
          -- This affects ALL 10,000 customers!<br/>
          -- There's no undo button in SQL!
        </code>
      </div>

      <div className={styles.infoBox} style={{borderColor: 'orange'}}>
        <p><strong>Pro Tip:</strong> Always write the WHERE clause FIRST, then add the SET clause. Better yet, run a SELECT with the same WHERE clause first to see which rows will be affected!</p>
      </div>

      <h3>Safe UPDATE Process</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Step 1: SELECT first to see what will be updated<br/>
          SELECT * FROM Customers WHERE Country = 'Mexico';<br/><br/>
          
          -- Step 2: If the results look correct, UPDATE<br/>
          UPDATE Customers<br/>
          SET ContactName = 'Juan'<br/>
          WHERE Country = 'Mexico';<br/><br/>
          
          -- Step 3: Verify the update<br/>
          SELECT * FROM Customers WHERE Country = 'Mexico';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>UPDATE with Calculations</h2>
      <p>
        You can use expressions and calculations in the SET clause:
      </p>

      <h3>Example: Increase All Prices by 10%</h3>
      <TryItYourselfEditor 
        initialCode={`UPDATE Products
SET Price = Price * 1.10
WHERE CategoryID = 1;

SELECT ProductName, Price FROM Products WHERE CategoryID = 1;`} 
        language="sql" 
      />

      <h3>Example: Decrement Stock After Purchase</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Products<br/>
          SET StockQuantity = StockQuantity - 5<br/>
          WHERE ProductID = 101;
        </code>
      </div>

      <h3>Example: Concatenate Strings</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Add prefix to all product names<br/>
          UPDATE Products<br/>
          SET ProductName = 'NEW - ' + ProductName<br/>
          WHERE IsNewArrival = 1;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>UPDATE with Complex WHERE Clauses</h2>
      <p>
        Use AND, OR, and other operators for precise targeting:
      </p>

      <h3>Example: Update Based on Multiple Conditions</h3>
      <TryItYourselfEditor 
        initialCode={`UPDATE Employees
SET Salary = Salary * 1.15, LastReviewDate = NOW()
WHERE Department = 'Sales' AND YearsOfService > 5;

SELECT FirstName, LastName, Salary FROM Employees 
WHERE Department = 'Sales' AND YearsOfService > 5;`} 
        language="sql" 
      />

      <h3>Example: Update Based on Range</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Orders<br/>
          SET Status = 'Overdue'<br/>
          WHERE OrderDate &lt; '2024-01-01'<br/>
          AND Status = 'Pending';
        </code>
      </div>

      <h3>Example: Update Using IN</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Products<br/>
          SET OnSale = 1, Discount = 0.20<br/>
          WHERE CategoryID IN (1, 3, 5, 7);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>UPDATE with Subquery</h2>
      <p>
        You can use subqueries to determine which rows to update or what values to set:
      </p>

      <h3>Example: Update Based on Another Table</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Set customer tier based on total purchases<br/>
          UPDATE Customers<br/>
          SET Tier = 'Premium'<br/>
          WHERE CustomerID IN (<br/>
          &nbsp;&nbsp;SELECT CustomerID<br/>
          &nbsp;&nbsp;FROM Orders<br/>
          &nbsp;&nbsp;GROUP BY CustomerID<br/>
          &nbsp;&nbsp;HAVING SUM(TotalAmount) &gt; 10000<br/>
          );
        </code>
      </div>

      <h3>Example: Update Using Value from Subquery</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Update product price to category average<br/>
          UPDATE Products P<br/>
          SET Price = (<br/>
          &nbsp;&nbsp;SELECT AVG(Price)<br/>
          &nbsp;&nbsp;FROM Products<br/>
          &nbsp;&nbsp;WHERE CategoryID = P.CategoryID<br/>
          )<br/>
          WHERE ProductID = 100;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Real-World UPDATE Examples</h2>

      <h3>Example 1: User Profile Update</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Users<br/>
          SET Email = 'newemail@example.com',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Phone = '+1-555-0123',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;UpdatedAt = NOW()<br/>
          WHERE UserID = 42;
        </code>
      </div>

      <h3>Example 2: Order Status Update</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Orders<br/>
          SET Status = 'Shipped',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;ShipDate = '2024-01-15',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;TrackingNumber = 'TRACK123456'<br/>
          WHERE OrderID = 1001;
        </code>
      </div>

      <h3>Example 3: Bulk Price Update</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Holiday sale: 25% off all electronics<br/>
          UPDATE Products<br/>
          SET Price = Price * 0.75,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;OnSale = 1,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;SaleEndDate = '2024-12-31'<br/>
          WHERE Category = 'Electronics';
        </code>
      </div>

      <h3>Example 4: Data Cleanup</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Fix formatting issues<br/>
          UPDATE Customers<br/>
          SET Phone = REPLACE(Phone, '-', ''),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Email = LOWER(Email)<br/>
          WHERE Phone LIKE '%-%';
        </code>
      </div>

      <h3>Example 5: Account Deactivation</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Deactivate accounts inactive for 2 years<br/>
          UPDATE Users<br/>
          SET IsActive = 0,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;DeactivationDate = NOW(),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Reason = 'Inactivity'<br/>
          WHERE LastLoginDate &lt; DATE_SUB(NOW(), INTERVAL 2 YEAR);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>UPDATE with JOIN (Advanced)</h2>
      <p>
        Some databases support updating based on joins with other tables:
      </p>

      <h3>MySQL Syntax</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE Orders O<br/>
          JOIN Customers C ON O.CustomerID = C.CustomerID<br/>
          SET O.ShippingCost = 0<br/>
          WHERE C.Tier = 'Premium';
        </code>
      </div>

      <h3>SQL Server Syntax</h3>
      <div className={styles.codeBlock}>
        <code>
          UPDATE O<br/>
          SET O.ShippingCost = 0<br/>
          FROM Orders O<br/>
          INNER JOIN Customers C ON O.CustomerID = C.CustomerID<br/>
          WHERE C.Tier = 'Premium';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>UPDATE Best Practices</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Always use WHERE</strong> - Unless you truly want to update every row</li>
        <li>✅ <strong>Test with SELECT first</strong> - Run SELECT with same WHERE to preview changes</li>
        <li>✅ <strong>Use transactions</strong> - Allows rollback if something goes wrong</li>
        <li>✅ <strong>Backup before bulk updates</strong> - Especially in production</li>
        <li>✅ <strong>Check row count</strong> - Verify expected number of rows affected</li>
        <li>✅ <strong>Update in batches</strong> - For very large tables, update in chunks</li>
        <li>❌ <strong>Don't update without WHERE</strong> - Unless absolutely intentional</li>
        <li>❌ <strong>Don't skip testing</strong> - Always verify on test data first</li>
      </ul>

      <h2 className={styles.subsectionTitle}>UPDATE with Transactions</h2>
      <p>
        For critical updates, use transactions to ensure you can rollback if needed:
      </p>
      <div className={styles.codeBlock}>
        <code>
          BEGIN TRANSACTION;<br/><br/>
          
          -- Make your updates<br/>
          UPDATE Products SET Price = Price * 1.10 WHERE CategoryID = 1;<br/>
          UPDATE Products SET Price = Price * 1.05 WHERE CategoryID = 2;<br/><br/>
          
          -- Check the results<br/>
          SELECT * FROM Products WHERE CategoryID IN (1, 2);<br/><br/>
          
          -- If everything looks good:<br/>
          COMMIT;<br/><br/>
          
          -- If something went wrong:<br/>
          -- ROLLBACK;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common UPDATE Errors</h2>

      <h3>Error 1: Forgot WHERE Clause</h3>
      <div className={styles.codeBlock}>
        <code>
          -- DISASTER: Updates all 100,000 products!<br/>
          UPDATE Products SET Price = 9.99;<br/><br/>
          
          -- CORRECT: Only updates one product<br/>
          UPDATE Products SET Price = 9.99 WHERE ProductID = 5;
        </code>
      </div>

      <h3>Error 2: Wrong Data Type</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: String in numeric column<br/>
          UPDATE Products SET Price = 'expensive' WHERE ProductID = 1;<br/><br/>
          
          -- CORRECT: Use proper data type<br/>
          UPDATE Products SET Price = 999.99 WHERE ProductID = 1;
        </code>
      </div>

      <h3>Error 3: Constraint Violation</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Violates unique constraint<br/>
          UPDATE Users SET Email = 'existing@email.com' WHERE UserID = 5;<br/>
          -- ERROR if another user already has this email<br/><br/>
          
          -- Check first:<br/>
          SELECT * FROM Users WHERE Email = 'existing@email.com';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Performance Considerations</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Index WHERE columns</strong> - Makes finding rows to update faster</li>
        <li>✅ <strong>Batch large updates</strong> - Update 10,000 rows at a time, not 1 million</li>
        <li>✅ <strong>Update during off-peak</strong> - Avoid heavy updates during busy hours</li>
        <li>✅ <strong>Avoid updating indexed columns</strong> - Can be slow on large tables</li>
        <li>❌ <strong>Don't update entire table</strong> - Consider if it's really necessary</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try these UPDATE challenges:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Update a single customer's city
UPDATE Customers 
SET City = 'Los Angeles' 
WHERE CustomerID = 10;

-- Exercise 2: Increase all product prices by 5%
UPDATE Products 
SET Price = Price * 1.05 
WHERE CategoryID = 2;

-- Exercise 3: Mark old orders as archived
UPDATE Orders 
SET Status = 'Archived', ArchivedDate = NOW()
WHERE OrderDate < '2023-01-01' AND Status = 'Completed';

-- Verify your changes
SELECT * FROM Customers WHERE CustomerID = 10;
SELECT ProductName, Price FROM Products WHERE CategoryID = 2 LIMIT 5;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Security Warning</h2>
      <div className={styles.infoBox} style={{borderColor: 'red'}}>
        <p><strong>SQL Injection:</strong> Never concatenate user input directly into UPDATE statements! Always use parameterized queries (prepared statements) to prevent SQL injection attacks.</p>
      </div>

      <div className={styles.codeBlock}>
        <code>
          -- DANGEROUS: SQL Injection vulnerability<br/>
          String query = "UPDATE Users SET Email = '" + userInput + "'";<br/><br/>
          
          -- SAFE: Use parameterized queries<br/>
          PreparedStatement stmt = conn.prepareStatement(<br/>
          &nbsp;&nbsp;"UPDATE Users SET Email = ? WHERE UserID = ?"<br/>
          );
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Key Takeaways</h2>
      <ul className={styles.list}>
        <li>✅ UPDATE modifies existing data in a table</li>
        <li>✅ Always use WHERE unless updating all rows intentionally</li>
        <li>✅ Test with SELECT before running UPDATE</li>
        <li>✅ Use transactions for critical updates</li>
        <li>✅ Multiple columns can be updated in one statement</li>
        <li>✅ Expressions and calculations can be used in SET</li>
        <li>⚠️ There's no undo in SQL - be extremely careful!</li>
      </ul>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>SQL is the language of data. To master it, check out these resources.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/" target="_blank" rel="noopener noreferrer">Learning SQL</a></strong> by Alan Beaulieu<br/>
              A comprehensive guide to mastering the fundamentals of SQL.
            </li>
            <li>
              <strong><a href="https://sql-performance-explained.com/" target="_blank" rel="noopener noreferrer">SQL Performance Explained</a></strong> by Markus Winand<br/>
              Crucial for developers who want their queries to run fast (Indexing, etc).
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://use-the-index-luke.com/" target="_blank" rel="noopener noreferrer">Use The Index, Luke!</a></strong><br/>
              A free guide to database performance and indexing for developers.
            </li>
            <li>
              <strong><a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">W3Schools SQL</a></strong><br/>
              The classic reference for syntax and quick examples.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/null-values"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/courses"><button className={styles.nextButton}>Finish Course 🏁</button></Link>
      </div>
    </div>
  );
};

export default SQLUpdate;