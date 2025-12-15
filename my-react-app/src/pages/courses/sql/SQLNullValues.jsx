import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLNullValues = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL NULL Values</h1>
      <p className={styles.introParagraph}>
        What is NULL? A field with a <code>NULL</code> value is a field with <strong>no value</strong>.
        Understanding NULL is crucial for database developers, as it represents the absence of data and requires special handling.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Important:</strong> A NULL value is different from a zero value (0) or a field that contains spaces (" "). A field with a NULL value is one that has been left blank during record creation.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Understanding NULL</h2>
      <p>
        NULL represents missing, unknown, or inapplicable data. It's not a value itself, but rather the absence of a value.
        Think of NULL as "I don't know" rather than "nothing" or "zero".
      </p>

      <h3>NULL vs Other Values</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Value</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>NULL</code></td>
            <td>Unknown or missing</td>
            <td>Customer hasn't provided a phone number</td>
          </tr>
          <tr>
            <td><code>0</code> (zero)</td>
            <td>Known value of zero</td>
            <td>Product price is free</td>
          </tr>
          <tr>
            <td><code>''</code> (empty string)</td>
            <td>Known empty text</td>
            <td>Comment field left blank intentionally</td>
          </tr>
          <tr>
            <td><code>FALSE</code></td>
            <td>Boolean false</td>
            <td>User is not active</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Why NULL Matters</h2>
      <p>
        NULL handling is critical because:
      </p>
      <ul className={styles.list}>
        <li><strong>Data completeness</strong> - Identifies missing information</li>
        <li><strong>Data quality</strong> - Helps find incomplete records</li>
        <li><strong>Business logic</strong> - Different behavior for unknown vs zero</li>
        <li><strong>Calculations</strong> - NULL propagates through mathematical operations</li>
      </ul>

      <h2 className={styles.subsectionTitle}>How to Test for NULL?</h2>
      <p>
        It is not possible to test for NULL values with comparison operators, such as <code>=</code>, <code>&lt;</code>, or <code>&lt;&gt;</code>.
        Typically, <code>WHERE column = NULL</code> will return nothing (not even an error, just zero results), because technically "unknown" does not equal "unknown".
      </p>
      <p>
        Instead, we use the <code>IS NULL</code> and <code>IS NOT NULL</code> operators.
      </p>

      <h3>Why = NULL Doesn't Work</h3>
      <p>
        In SQL logic, NULL represents "unknown". The expression <code>NULL = NULL</code> evaluates to NULL (unknown), not TRUE.
        This is because we can't say if one unknown value equals another unknown value.
      </p>

      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Will return 0 rows even if NULLs exist<br/>
          SELECT * FROM Customers WHERE Phone = NULL;<br/><br/>
          
          -- CORRECT: Use IS NULL<br/>
          SELECT * FROM Customers WHERE Phone IS NULL;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>IS NULL Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT column_names<br/>
          FROM table_name<br/>
          WHERE column_name IS NULL;
        </code>
      </div>

      <p><strong>Example:</strong> List all customers who do not have an address recorded:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;`} 
        language="sql" 
      />

      <p>
        This query finds all customers where the Address column contains NULL, meaning no address has been provided.
      </p>

      <h2 className={styles.subsectionTitle}>IS NOT NULL Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT column_names<br/>
          FROM table_name<br/>
          WHERE column_name IS NOT NULL;
        </code>
      </div>

      <p><strong>Example:</strong> List all customers who definitely have an address:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;`} 
        language="sql" 
      />

      <p>
        This returns all customers where Address has an actual value (not NULL).
      </p>

      <h2 className={styles.subsectionTitle}>NULL in Calculations</h2>
      <p>
        NULL propagates through calculations. Any arithmetic operation involving NULL results in NULL:
      </p>

      <div className={styles.codeBlock}>
        <code>
          SELECT ProductName,<br/>
          &nbsp;&nbsp;Price,<br/>
          &nbsp;&nbsp;Discount,<br/>
          &nbsp;&nbsp;Price - Discount AS FinalPrice<br/>
          FROM Products;
        </code>
      </div>

      <p>
        If Discount is NULL, then FinalPrice will also be NULL (not the same as Price).
      </p>

      <h3>Arithmetic with NULL</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>10 + NULL</code></td>
            <td>NULL</td>
          </tr>
          <tr>
            <td><code>5 * NULL</code></td>
            <td>NULL</td>
          </tr>
          <tr>
            <td><code>NULL / 2</code></td>
            <td>NULL</td>
          </tr>
          <tr>
            <td><code>NULL - NULL</code></td>
            <td>NULL</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Handling NULL with Functions</h2>
      <p>
        Most databases provide functions to handle NULL values:
      </p>

      <h3>COALESCE Function</h3>
      <p>
        Returns the first non-NULL value in the list:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT ProductName, 
       COALESCE(Discount, 0) AS DiscountValue
FROM Products;`} 
        language="sql" 
      />

      <p>
        If Discount is NULL, it will be replaced with 0.
      </p>

      <h3>IFNULL / ISNULL (MySQL/SQL Server)</h3>
      <div className={styles.codeBlock}>
        <code>
          -- MySQL<br/>
          SELECT IFNULL(Phone, 'No phone') FROM Customers;<br/><br/>
          
          -- SQL Server<br/>
          SELECT ISNULL(Phone, 'No phone') FROM Customers;
        </code>
      </div>

      <h3>NULLIF Function</h3>
      <p>
        Returns NULL if two values are equal, otherwise returns the first value:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT NULLIF(Quantity, 0) AS SafeQuantity<br/>
          FROM OrderItems;
        </code>
      </div>
      <p>
        This is useful to avoid division by zero errors.
      </p>

      <h2 className={styles.subsectionTitle}>NULL in Aggregate Functions</h2>
      <p>
        Aggregate functions typically ignore NULL values:
      </p>

      <TryItYourselfEditor 
        initialCode={`-- Count non-NULL phone numbers
SELECT COUNT(Phone) AS CustomersWithPhone FROM Customers;

-- Count all rows (including NULLs)
SELECT COUNT(*) AS TotalCustomers FROM Customers;

-- Average ignores NULLs
SELECT AVG(Discount) AS AverageDiscount FROM Products;`} 
        language="sql" 
      />

      <h3>Aggregate Function Behavior</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Function</th>
            <th>NULL Handling</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>COUNT(column)</code></td>
            <td>Ignores NULLs</td>
            <td>Counts only non-NULL values</td>
          </tr>
          <tr>
            <td><code>COUNT(*)</code></td>
            <td>Includes NULLs</td>
            <td>Counts all rows</td>
          </tr>
          <tr>
            <td><code>SUM(column)</code></td>
            <td>Ignores NULLs</td>
            <td>Sums non-NULL values</td>
          </tr>
          <tr>
            <td><code>AVG(column)</code></td>
            <td>Ignores NULLs</td>
            <td>Average of non-NULL values</td>
          </tr>
          <tr>
            <td><code>MAX/MIN(column)</code></td>
            <td>Ignores NULLs</td>
            <td>Max/min of non-NULL values</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>NULL in Sorting</h2>
      <p>
        How NULL values are sorted depends on the database system:
      </p>

      <TryItYourselfEditor 
        initialCode={`-- NULLs might appear first or last depending on database
SELECT CustomerName, Phone
FROM Customers
ORDER BY Phone;

-- Force NULLs to appear last (PostgreSQL)
-- ORDER BY Phone NULLS LAST;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>NULL and Logical Operators</h2>
      <p>
        NULL follows three-valued logic (TRUE, FALSE, NULL/UNKNOWN):
      </p>

      <h3>NULL with AND</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>TRUE AND NULL</code></td>
            <td>NULL</td>
          </tr>
          <tr>
            <td><code>FALSE AND NULL</code></td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td><code>NULL AND NULL</code></td>
            <td>NULL</td>
          </tr>
        </tbody>
      </table>

      <h3>NULL with OR</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>TRUE OR NULL</code></td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td><code>FALSE OR NULL</code></td>
            <td>NULL</td>
          </tr>
          <tr>
            <td><code>NULL OR NULL</code></td>
            <td>NULL</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Real-World NULL Examples</h2>

      <h3>Example 1: Find Incomplete Customer Records</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT CustomerID, CustomerName<br/>
          FROM Customers<br/>
          WHERE Email IS NULL OR Phone IS NULL;
        </code>
      </div>

      <h3>Example 2: Orders Without Shipping Date</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT OrderID, OrderDate<br/>
          FROM Orders<br/>
          WHERE ShipDate IS NULL<br/>
          ORDER BY OrderDate;
        </code>
      </div>

      <h3>Example 3: Products Without Discounts</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT ProductName, Price<br/>
          FROM Products<br/>
          WHERE Discount IS NULL OR Discount = 0;
        </code>
      </div>

      <h3>Example 4: Users Who Haven't Set Profile Picture</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT Username, Email<br/>
          FROM Users<br/>
          WHERE ProfilePicture IS NULL;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Preventing NULL Values</h2>
      <p>
        You can control whether columns accept NULL values using constraints:
      </p>

      <h3>NOT NULL Constraint</h3>
      <div className={styles.codeBlock}>
        <code>
          CREATE TABLE Employees (<br/>
          &nbsp;&nbsp;EmployeeID INT PRIMARY KEY,<br/>
          &nbsp;&nbsp;FirstName VARCHAR(50) NOT NULL, -- Must have value<br/>
          &nbsp;&nbsp;LastName VARCHAR(50) NOT NULL,  -- Must have value<br/>
          &nbsp;&nbsp;MiddleName VARCHAR(50),          -- Can be NULL<br/>
          &nbsp;&nbsp;Email VARCHAR(100) NOT NULL      -- Must have value<br/>
          );
        </code>
      </div>

      <h3>Default Values</h3>
      <div className={styles.codeBlock}>
        <code>
          CREATE TABLE Products (<br/>
          &nbsp;&nbsp;ProductID INT PRIMARY KEY,<br/>
          &nbsp;&nbsp;ProductName VARCHAR(100) NOT NULL,<br/>
          &nbsp;&nbsp;Price DECIMAL(10,2) NOT NULL,<br/>
          &nbsp;&nbsp;Discount DECIMAL(10,2) DEFAULT 0, -- Default instead of NULL<br/>
          &nbsp;&nbsp;InStock BOOLEAN DEFAULT TRUE      -- Default instead of NULL<br/>
          );
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common NULL Mistakes</h2>

      <h3>Mistake 1: Using = instead of IS NULL</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Returns no rows<br/>
          SELECT * FROM Customers WHERE Phone = NULL;<br/><br/>
          
          -- CORRECT:<br/>
          SELECT * FROM Customers WHERE Phone IS NULL;
        </code>
      </div>

      <h3>Mistake 2: Forgetting NULL in Calculations</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Result is NULL if Discount is NULL<br/>
          SELECT Price - Discount AS FinalPrice FROM Products;<br/><br/>
          
          -- CORRECT: Use COALESCE<br/>
          SELECT Price - COALESCE(Discount, 0) AS FinalPrice FROM Products;
        </code>
      </div>

      <h3>Mistake 3: Not Considering NULL in WHERE Clauses</h3>
      <div className={styles.codeBlock}>
        <code>
          -- This might miss rows where Discount is NULL<br/>
          SELECT * FROM Products WHERE Discount &lt; 10;<br/><br/>
          
          -- Better: Explicitly handle NULL<br/>
          SELECT * FROM Products<br/>
          WHERE Discount &lt; 10 OR Discount IS NULL;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Best Practices for NULL</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Use IS NULL / IS NOT NULL</strong> - Never use = NULL</li>
        <li>✅ <strong>Handle NULL in calculations</strong> - Use COALESCE or similar functions</li>
        <li>✅ <strong>Document NULL meaning</strong> - Is it "unknown", "not applicable", or "not yet entered"?</li>
        <li>✅ <strong>Use NOT NULL constraints</strong> - For columns that must have values</li>
        <li>✅ <strong>Provide defaults</strong> - When appropriate, use DEFAULT instead of allowing NULL</li>
        <li>❌ <strong>Don't overuse NULL</strong> - Consider if empty string or 0 is more appropriate</li>
        <li>❌ <strong>Don't ignore NULL in queries</strong> - Explicitly consider NULL cases</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try these NULL-handling challenges:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Find customers without email
SELECT CustomerName FROM Customers WHERE Email IS NULL;

-- Exercise 2: Count customers with phone numbers
SELECT COUNT(Phone) AS WithPhone, 
       COUNT(*) - COUNT(Phone) AS WithoutPhone
FROM Customers;

-- Exercise 3: Calculate prices with optional discount
SELECT ProductName, 
       Price,
       COALESCE(Discount, 0) AS Discount,
       Price - COALESCE(Discount, 0) AS FinalPrice
FROM Products;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Key Takeaways</h2>
      <ul className={styles.list}>
        <li>✅ NULL means "unknown" or "missing", not zero or empty</li>
        <li>✅ Use IS NULL and IS NOT NULL, never = NULL</li>
        <li>✅ NULL propagates through calculations</li>
        <li>✅ Aggregate functions ignore NULL (except COUNT(*))</li>
        <li>✅ Use COALESCE to provide default values for NULL</li>
        <li>✅ NULL follows three-valued logic (TRUE, FALSE, NULL)</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/insert-into"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/update"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLNullValues;