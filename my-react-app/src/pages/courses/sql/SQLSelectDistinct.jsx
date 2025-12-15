import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLSelectDistinct = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL SELECT DISTINCT</h1>
      <p className={styles.introParagraph}>
        The <code>SELECT DISTINCT</code> statement is used to return only distinct (different) values.
        This is one of the most useful features when analyzing data and finding unique entries in your database.
      </p>

      <h2 className={styles.subsectionTitle}>The Problem: Duplicates</h2>
      <p>
        Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.
      </p>
      <p>
        For example, in the "Customers" table, many customers might come from "Mexico". If you select just the Country column, you will see "Mexico" repeated many times.
      </p>

      <h3>Real-World Scenario</h3>
      <p>
        Imagine you're an analyst at an e-commerce company. You have a table with 10,000 customer records, but customers are from only 50 different countries.
        If you run <code>SELECT Country FROM Customers</code>, you'll get 10,000 rows (many duplicates).
        But if you use <code>SELECT DISTINCT Country FROM Customers</code>, you'll get only 50 rows - one for each unique country.
      </p>

      <h2 className={styles.subsectionTitle}>Syntax</h2>
      <div className={styles.codeBlock}>
        <code>
          SELECT DISTINCT column1, column2, ...<br/>
          FROM table_name;
        </code>
      </div>

      <p>
        The <code>DISTINCT</code> keyword can be applied to one or more columns. When applied to multiple columns,
        it returns unique <em>combinations</em> of those columns.
      </p>

      <h2 className={styles.subsectionTitle}>Example Without DISTINCT</h2>
      <p>This query returns ALL country entries, including duplicates:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT Country FROM Customers;`} 
        language="sql" 
      />

      <p>
        <strong>Result:</strong> If you have 91 customers, this returns 91 rows, even if many customers share the same country.
      </p>
      <div className={styles.codeBlock}>
        <code>
          Country<br/>
          -------<br/>
          Germany<br/>
          Mexico<br/>
          Mexico<br/>
          UK<br/>
          Germany<br/>
          Mexico<br/>
          ... (91 rows total)
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Example With DISTINCT</h2>
      <p>This query returns each country only once:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT DISTINCT Country FROM Customers;`} 
        language="sql" 
      />

      <p>
        <strong>Result:</strong> Only unique countries are returned:
      </p>
      <div className={styles.codeBlock}>
        <code>
          Country<br/>
          -------<br/>
          Germany<br/>
          Mexico<br/>
          UK<br/>
          France<br/>
          Spain<br/>
          ... (21 rows total - one per unique country)
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>DISTINCT with Multiple Columns</h2>
      <p>
        When you use DISTINCT with multiple columns, SQL returns unique <em>combinations</em> of those columns:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT DISTINCT Country, City 
FROM Customers;`} 
        language="sql" 
      />

      <p>
        This returns each unique combination of Country and City. For example:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Germany</td>
            <td>Berlin</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>München</td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>México D.F.</td>
          </tr>
          <tr>
            <td>UK</td>
            <td>London</td>
          </tr>
        </tbody>
      </table>

      <p>
        Even though "Germany" appears twice, the combinations are different: (Germany, Berlin) and (Germany, München) are treated as distinct rows.
      </p>

      <h2 className={styles.subsectionTitle}>Count Distinct</h2>
      <p>
        Often, you want to know <em>how many</em> unique values exist in a column. 
        You can combine <code>COUNT</code> and <code>DISTINCT</code> (in most SQL databases like MySQL, PostgreSQL, Oracle).
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT COUNT(DISTINCT Country) AS UniqueCountries
FROM Customers;`} 
        language="sql" 
      />
      <p>This would return a single number (e.g., 21), telling you that you have customers in 21 different countries.</p>

      <h3>Comparing COUNT vs COUNT DISTINCT</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Query</th>
            <th>Result</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>SELECT COUNT(*) FROM Customers;</code></td>
            <td>91</td>
            <td>Total number of customers</td>
          </tr>
          <tr>
            <td><code>SELECT COUNT(Country) FROM Customers;</code></td>
            <td>91</td>
            <td>Number of non-NULL country values</td>
          </tr>
          <tr>
            <td><code>SELECT COUNT(DISTINCT Country) FROM Customers;</code></td>
            <td>21</td>
            <td>Number of unique countries</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>DISTINCT with NULL Values</h2>
      <p>
        NULL is considered a distinct value. If a column has multiple NULL values, DISTINCT will return only one NULL.
      </p>
      <TryItYourselfEditor 
        initialCode={`-- If some customers have NULL in Region column
SELECT DISTINCT Region 
FROM Customers;`} 
        language="sql" 
      />

      <p>
        If 10 customers have NULL in the Region column, you'll see NULL appear only once in the result set.
      </p>

      <h2 className={styles.subsectionTitle}>Performance Considerations</h2>
      <div className={styles.infoBox}>
        <p><strong>Performance Note:</strong> DISTINCT requires the database to sort or hash the data to eliminate duplicates. 
        On large tables, this can be slow. If you need better performance, consider using GROUP BY instead.</p>
      </div>

      <p>
        For large datasets, these two queries are similar but may have different performance characteristics:
      </p>
      <div className={styles.codeBlock}>
        <code>
          -- Using DISTINCT<br/>
          SELECT DISTINCT Country FROM Customers;<br/><br/>
          
          -- Using GROUP BY (often faster)<br/>
          SELECT Country FROM Customers GROUP BY Country;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common Use Cases for DISTINCT</h2>
      
      <h3>1. Data Analysis</h3>
      <p>Find all unique product categories in your inventory:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT DISTINCT Category FROM Products;
        </code>
      </div>

      <h3>2. Data Validation</h3>
      <p>Check if email addresses are unique (they should be!):</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT Email, COUNT(*) as Occurrences<br/>
          FROM Users<br/>
          GROUP BY Email<br/>
          HAVING COUNT(*) &gt; 1; -- Shows duplicate emails
        </code>
      </div>

      <h3>3. Reporting</h3>
      <p>Get a list of all employees who made sales (without duplicates):</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT DISTINCT EmployeeID FROM Orders;
        </code>
      </div>

      <h3>4. Dropdown Lists</h3>
      <p>Generate data for a dropdown menu in an application:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT DISTINCT Country FROM Customers ORDER BY Country;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>DISTINCT vs GROUP BY</h2>
      <p>
        DISTINCT and GROUP BY can sometimes achieve similar results, but they serve different purposes:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>DISTINCT</th>
            <th>GROUP BY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Purpose</strong></td>
            <td>Remove duplicates</td>
            <td>Aggregate data</td>
          </tr>
          <tr>
            <td><strong>Aggregate Functions</strong></td>
            <td>Cannot use (except COUNT)</td>
            <td>Can use (SUM, AVG, MAX, etc.)</td>
          </tr>
          <tr>
            <td><strong>Syntax</strong></td>
            <td>Simpler</td>
            <td>More verbose</td>
          </tr>
          <tr>
            <td><strong>Performance</strong></td>
            <td>Usually similar</td>
            <td>May be faster on some databases</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try these queries to master DISTINCT:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Get unique cities
SELECT DISTINCT City FROM Customers;

-- Exercise 2: Count unique cities
SELECT COUNT(DISTINCT City) AS UniqueCities FROM Customers;

-- Exercise 3: Get unique Country-City combinations
SELECT DISTINCT Country, City FROM Customers ORDER BY Country, City;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Common Mistakes to Avoid</h2>
      <ul className={styles.list}>
        <li>❌ <strong>Using DISTINCT unnecessarily:</strong> If data is already unique, DISTINCT adds overhead</li>
        <li>❌ <strong>Forgetting ORDER BY:</strong> DISTINCT doesn't guarantee order; add ORDER BY for sorted results</li>
        <li>❌ <strong>Applying DISTINCT to *:</strong> <code>SELECT DISTINCT *</code> is often meaningless if you have a unique ID column</li>
        <li>✅ <strong>Use aliases for clarity:</strong> <code>SELECT DISTINCT Country AS UniqueCountry</code></li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/select"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/where"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLSelectDistinct;