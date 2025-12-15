import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLOrderBy = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL ORDER BY Keyword</h1>
      <p className={styles.introParagraph}>
        The <code>ORDER BY</code> keyword is used to sort the result-set in ascending or descending order.
        By default, SQL sorts data in <strong>ascending</strong> order (A-Z, 0-9).
        Sorting is essential for presenting data in a meaningful way to users and for analysis.
      </p>

      <h2 className={styles.subsectionTitle}>Why Use ORDER BY?</h2>
      <p>
        Without ORDER BY, the database returns rows in an unpredictable order (usually based on how they're stored physically).
        ORDER BY allows you to:
      </p>
      <ul className={styles.list}>
        <li><strong>Present data logically</strong> - Show results in a meaningful sequence</li>
        <li><strong>Find top/bottom records</strong> - Identify highest/lowest values</li>
        <li><strong>Improve user experience</strong> - Make reports and lists more readable</li>
        <li><strong>Facilitate analysis</strong> - Spot trends and patterns more easily</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Basic Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name<br/>
          ORDER BY column1, column2, ... ASC|DESC;
        </code>
      </div>

      <ul className={styles.list}>
        <li><code>ASC</code> - Ascending order (default, A to Z, 0 to 9, oldest to newest)</li>
        <li><code>DESC</code> - Descending order (Z to A, 9 to 0, newest to oldest)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>1. Sorting Ascending (Default)</h2>
      <p>
        Sorts the "Customers" table by the "Country" column alphabetically.
        When you don't specify ASC or DESC, SQL uses ASC by default:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
ORDER BY Country;`} 
        language="sql" 
      />

      <p>
        This is equivalent to:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          ORDER BY Country ASC;
        </code>
      </div>

      <h3>What Gets Sorted How?</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Ascending Order</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Text</strong></td>
            <td>A, B, C ... Z</td>
            <td>Apple, Banana, Cherry</td>
          </tr>
          <tr>
            <td><strong>Numbers</strong></td>
            <td>0, 1, 2 ... 9</td>
            <td>1, 5, 10, 100</td>
          </tr>
          <tr>
            <td><strong>Dates</strong></td>
            <td>Oldest to Newest</td>
            <td>2020-01-01, 2023-05-15, 2024-12-31</td>
          </tr>
          <tr>
            <td><strong>NULL</strong></td>
            <td>First or Last (database-dependent)</td>
            <td>NULL, then actual values</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>2. Sorting Descending (DESC)</h2>
      <p>
        To sort in reverse order (Z-A, 9-0), use the <code>DESC</code> keyword.
        This is useful for finding the "top" items (highest prices, most recent dates, etc.):
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
ORDER BY Country DESC;`} 
        language="sql" 
      />

      <h3>Common DESC Use Cases</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Most expensive products first<br/>
          SELECT * FROM Products ORDER BY Price DESC;<br/><br/>
          
          -- Newest orders first<br/>
          SELECT * FROM Orders ORDER BY OrderDate DESC;<br/><br/>
          
          -- Highest scores first<br/>
          SELECT * FROM Students ORDER BY Score DESC;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>3. Sorting by Multiple Columns</h2>
      <p>
        You can sort by more than one column. The second column is only used if the values in the first column are equal.
        This creates a "tie-breaker" hierarchy.
      </p>
      <p>
        <strong>Example:</strong> Sort by <em>Country</em>. If two rows have the same Country, sort them by <em>CustomerName</em>.
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
ORDER BY Country, CustomerName;`} 
        language="sql" 
      />

      <h3>How Multi-Column Sorting Works</h3>
      <p>
        Imagine you have these customers:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CustomerName</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zara</td>
            <td>Mexico</td>
            <td>Mexico City</td>
          </tr>
          <tr>
            <td>Ana</td>
            <td>Mexico</td>
            <td>Guadalajara</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Germany</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>

      <p>
        With <code>ORDER BY Country, CustomerName</code>, the result would be:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CustomerName</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peter</td>
            <td>Germany</td>
            <td>Berlin</td>
          </tr>
          <tr>
            <td>Ana</td>
            <td>Mexico</td>
            <td>Guadalajara</td>
          </tr>
          <tr>
            <td>Zara</td>
            <td>Mexico</td>
            <td>Mexico City</td>
          </tr>
        </tbody>
      </table>

      <p>
        Notice that Germany comes first (alphabetically), and within Mexico, Ana comes before Zara.
      </p>

      <h2 className={styles.subsectionTitle}>4. Mixed Sort Direction</h2>
      <p>
        You can sort one column ascending and another descending.
        Each column can have its own sort direction.
      </p>
      <p>
        <strong>Example:</strong> Sort by <em>Country</em> (A-Z), but if the Country is the same, sort by <em>CustomerName</em> in reverse (Z-A).
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;`} 
        language="sql" 
      />

      <h3>Real-World Example: Sales Leaderboard</h3>
      <p>
        Show top salespeople by region, with highest sales first within each region:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT SalespersonName, Region, TotalSales<br/>
          FROM Sales<br/>
          ORDER BY Region ASC, TotalSales DESC;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Sorting by Column Position</h2>
      <p>
        You can use column numbers instead of names (though this is not recommended for maintainability):
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT CustomerName, City, Country
FROM Customers
ORDER BY 3, 1; -- Sorts by 3rd column (Country), then 1st column (CustomerName)`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Best Practice:</strong> Use column names instead of numbers. Column numbers make your code harder to understand and fragile (if you change the SELECT clause, the ORDER BY breaks).</p>
      </div>

      <h2 className={styles.subsectionTitle}>Sorting by Calculated Columns</h2>
      <p>
        You can sort by expressions or calculated values:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT ProductName, Price, Price * 0.9 AS DiscountedPrice
FROM Products
ORDER BY Price * 0.9 DESC;`} 
        language="sql" 
      />

      <p>
        Or use the alias:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT ProductName, Price, Price * 0.9 AS DiscountedPrice<br/>
          FROM Products<br/>
          ORDER BY DiscountedPrice DESC;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Sorting with NULL Values</h2>
      <p>
        How NULL values are sorted depends on your database system:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Database</th>
            <th>ASC Behavior</th>
            <th>DESC Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MySQL</strong></td>
            <td>NULLs first</td>
            <td>NULLs last</td>
          </tr>
          <tr>
            <td><strong>PostgreSQL</strong></td>
            <td>NULLs last</td>
            <td>NULLs first</td>
          </tr>
          <tr>
            <td><strong>SQL Server</strong></td>
            <td>NULLs first</td>
            <td>NULLs last</td>
          </tr>
        </tbody>
      </table>

      <h3>Controlling NULL Placement</h3>
      <p>
        Some databases let you specify where NULLs should appear:
      </p>
      <div className={styles.codeBlock}>
        <code>
          -- PostgreSQL syntax<br/>
          ORDER BY Price ASC NULLS LAST;<br/>
          ORDER BY Price DESC NULLS FIRST;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>ORDER BY with WHERE Clause</h2>
      <p>
        You can combine ORDER BY with WHERE to filter and sort:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Germany'
ORDER BY City;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Important:</strong> The ORDER BY clause always comes <em>after</em> the WHERE clause in SQL statements.</p>
      </div>

      <h3>Complete Query Order</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT columns<br/>
          FROM table<br/>
          WHERE condition<br/>
          ORDER BY column;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Performance Considerations</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Index sort columns:</strong> Columns used in ORDER BY should be indexed for better performance</li>
        <li>✅ <strong>Limit results:</strong> Use LIMIT/TOP with ORDER BY to get only what you need</li>
        <li>✅ <strong>Sort on single table:</strong> Sorting after joins can be expensive</li>
        <li>❌ <strong>Avoid sorting large result sets:</strong> Sort millions of rows only when necessary</li>
        <li>❌ <strong>Don't sort by functions:</strong> <code>ORDER BY LOWER(Name)</code> can't use indexes efficiently</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Common ORDER BY Patterns</h2>

      <h3>Pattern 1: Top N Results</h3>
      <div className={styles.codeBlock}>
        <code>
          -- MySQL/PostgreSQL<br/>
          SELECT * FROM Products ORDER BY Price DESC LIMIT 10;<br/><br/>
          
          -- SQL Server<br/>
          SELECT TOP 10 * FROM Products ORDER BY Price DESC;
        </code>
      </div>

      <h3>Pattern 2: Alphabetical List</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT CustomerName FROM Customers<br/>
          ORDER BY CustomerName ASC;
        </code>
      </div>

      <h3>Pattern 3: Most Recent First</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM BlogPosts<br/>
          ORDER BY PublishedDate DESC;
        </code>
      </div>

      <h3>Pattern 4: Prioritized List</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Show urgent tasks first, then by due date<br/>
          SELECT * FROM Tasks<br/>
          ORDER BY Priority DESC, DueDate ASC;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Real-World Examples</h2>

      <h3>Example 1: E-commerce - Product Catalog</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Show products by category, highest rated first<br/>
          SELECT ProductName, Category, Rating, Price<br/>
          FROM Products<br/>
          WHERE InStock = 1<br/>
          ORDER BY Category ASC, Rating DESC, Price ASC;
        </code>
      </div>

      <h3>Example 2: Social Media - Timeline</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Show most recent posts first<br/>
          SELECT PostID, Username, PostContent, CreatedAt<br/>
          FROM Posts<br/>
          WHERE IsPublished = 1<br/>
          ORDER BY CreatedAt DESC<br/>
          LIMIT 50;
        </code>
      </div>

      <h3>Example 3: HR - Employee Directory</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Alphabetical by last name, then first name<br/>
          SELECT LastName, FirstName, Department, HireDate<br/>
          FROM Employees<br/>
          ORDER BY LastName ASC, FirstName ASC;
        </code>
      </div>

      <h3>Example 4: Education - Grade Report</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Show top students by GPA<br/>
          SELECT StudentName, GPA, Major<br/>
          FROM Students<br/>
          WHERE GraduationYear = 2024<br/>
          ORDER BY GPA DESC, StudentName ASC;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common Mistakes to Avoid</h2>

      <h3>Mistake 1: Forgetting ORDER BY</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: No guaranteed order<br/>
          SELECT * FROM Products;<br/><br/>
          
          -- CORRECT: Explicit ordering<br/>
          SELECT * FROM Products ORDER BY ProductName;
        </code>
      </div>

      <h3>Mistake 2: Wrong Clause Order</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: ORDER BY before WHERE<br/>
          SELECT * FROM Customers<br/>
          ORDER BY City<br/>
          WHERE Country = 'USA'; -- Syntax Error!<br/><br/>
          
          -- CORRECT: WHERE before ORDER BY<br/>
          SELECT * FROM Customers<br/>
          WHERE Country = 'USA'<br/>
          ORDER BY City;
        </code>
      </div>

      <h3>Mistake 3: Sorting by Ambiguous Columns</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: When joining tables with same column names<br/>
          SELECT * FROM Orders<br/>
          JOIN Customers ON Orders.CustomerID = Customers.ID<br/>
          ORDER BY Name; -- Which table's Name?<br/><br/>
          
          -- CORRECT: Fully qualify the column<br/>
          ORDER BY Customers.Name;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try these sorting challenges:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Sort customers by city in descending order
SELECT * FROM Customers ORDER BY City DESC;

-- Exercise 2: Sort products by category (A-Z), then price (high to low)
SELECT ProductName, Category, Price FROM Products
ORDER BY Category ASC, Price DESC;

-- Exercise 3: Show top 5 most expensive products
SELECT ProductName, Price FROM Products
ORDER BY Price DESC
LIMIT 5;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Key Takeaways</h2>
      <ul className={styles.list}>
        <li>✅ ORDER BY sorts the result-set (ASC by default)</li>
        <li>✅ You can sort by multiple columns with different directions</li>
        <li>✅ ORDER BY must come after WHERE, before LIMIT</li>
        <li>✅ Use column names, not positions, for better maintainability</li>
        <li>✅ Index your ORDER BY columns for better performance</li>
        <li>✅ NULL handling varies by database system</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/and-or-not"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/insert-into"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLOrderBy;