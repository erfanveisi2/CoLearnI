import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLSyntax = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL Syntax</h1>
      <p className={styles.introParagraph}>
        SQL syntax is relatively English-like. It relies on <strong>Statements</strong> to tell the database what to do.
        Understanding SQL syntax is fundamental to writing effective database queries and managing data efficiently.
      </p>

      <h2 className={styles.subsectionTitle}>Database Tables</h2>
      <p>
        A database most often contains one or more tables. Each table is identified by a name (e.g., "Customers" or "Orders").
        Tables contain records (rows) with data.
      </p>
      <p>
        Think of a table like a spreadsheet in Excel or Google Sheets. Each table has:
      </p>
      <ul className={styles.list}>
        <li><strong>Columns</strong> - Define the type of data (e.g., Name, Email, Age)</li>
        <li><strong>Rows</strong> - Contain the actual data entries</li>
        <li><strong>Primary Key</strong> - A unique identifier for each row (usually an ID column)</li>
        <li><strong>Foreign Key</strong> - A reference to a primary key in another table (for relationships)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>SQL Statements</h2>
      <p>
        Most of the actions you need to perform on a database are done with SQL statements.
        The following SQL statement selects all the records in the "Customers" table:
      </p>

      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Note:</strong> In this course, we will use a hypothetical database structure. The "Try It Yourself" editor simulates the logic.</p>
      </div>

      <h2 className={styles.subsectionTitle}>SQL Statement Structure</h2>
      <p>
        SQL statements are composed of clauses, expressions, and predicates. Let's break down a typical SQL statement:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT CustomerName, City<br/>
          FROM Customers<br/>
          WHERE Country = 'USA'<br/>
          ORDER BY CustomerName;
        </code>
      </div>
      <p>This statement has four parts:</p>
      <ul className={styles.list}>
        <li><code>SELECT</code> clause - Specifies which columns to retrieve</li>
        <li><code>FROM</code> clause - Specifies which table to query</li>
        <li><code>WHERE</code> clause - Filters the results based on a condition</li>
        <li><code>ORDER BY</code> clause - Sorts the results</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Important Syntax Rules</h2>
      
      <h3>1. Case Sensitivity</h3>
      <p>
        <strong>SQL keywords are NOT case sensitive</strong>: <code>select</code> is the same as <code>SELECT</code>.
      </p>
      <p>
        However, in this tutorial we will write all SQL keywords in upper-case (e.g., <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>). This is a best practice to distinguish keywords from table/column names.
      </p>
      <p>
        <strong>Table and column names</strong> may be case-sensitive depending on your database system:
      </p>
      <ul className={styles.list}>
        <li><strong>MySQL (on Windows)</strong> - Not case sensitive</li>
        <li><strong>MySQL (on Linux)</strong> - Case sensitive</li>
        <li><strong>PostgreSQL</strong> - Treats unquoted identifiers as lowercase</li>
        <li><strong>SQL Server</strong> - Depends on collation settings</li>
      </ul>

      <h3>2. Semicolons</h3>
      <p>
        Some database systems require a semicolon at the end of each SQL statement.
        Semicolons are the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call.
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers;<br/>
          SELECT * FROM Orders;
        </code>
      </div>
      <p>
        While many database systems don't strictly require semicolons for single statements, it's considered best practice to always include them.
        This makes your code more portable and prevents errors when executing multiple statements.
      </p>

      <h3>3. Whitespace and Line Breaks</h3>
      <p>
        SQL ignores extra whitespace and line breaks. These two queries are identical:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers WHERE Country='USA';<br/><br/>
          
          -- Same as:<br/>
          SELECT *<br/>
          FROM Customers<br/>
          WHERE Country = 'USA';
        </code>
      </div>
      <p>
        Use whitespace and indentation to make your queries more readable, especially for complex statements.
      </p>

      <h3>4. Comments in SQL</h3>
      <p>
        Comments are used to explain sections of SQL statements or to prevent execution of SQL statements.
      </p>
      <div className={styles.codeBlock}>
        <code>
          -- This is a single-line comment<br/>
          SELECT * FROM Customers; -- Get all customers<br/><br/>
          
          /* This is a<br/>
             multi-line comment */<br/>
          SELECT * FROM Products;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common SQL Commands</h2>
      <p>SQL commands are divided into several categories:</p>
      
      <h3>Data Query Language (DQL)</h3>
      <ul className={styles.list}>
        <li><strong>SELECT</strong> - Retrieves data from one or more tables</li>
      </ul>

      <h3>Data Manipulation Language (DML)</h3>
      <ul className={styles.list}>
        <li><strong>INSERT INTO</strong> - Inserts new data into a database</li>
        <li><strong>UPDATE</strong> - Updates existing data in a database</li>
        <li><strong>DELETE</strong> - Deletes data from a database</li>
      </ul>

      <h3>Data Definition Language (DDL)</h3>
      <ul className={styles.list}>
        <li><strong>CREATE DATABASE</strong> - Creates a new database</li>
        <li><strong>CREATE TABLE</strong> - Creates a new table</li>
        <li><strong>ALTER TABLE</strong> - Modifies an existing table structure</li>
        <li><strong>DROP TABLE</strong> - Deletes a table</li>
        <li><strong>CREATE INDEX</strong> - Creates an index (search key)</li>
        <li><strong>DROP INDEX</strong> - Deletes an index</li>
      </ul>

      <h3>Data Control Language (DCL)</h3>
      <ul className={styles.list}>
        <li><strong>GRANT</strong> - Gives user access privileges</li>
        <li><strong>REVOKE</strong> - Takes back access privileges</li>
      </ul>

      <h2 className={styles.subsectionTitle}>SQL Naming Conventions</h2>
      <p>
        Following naming conventions makes your database more maintainable:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Convention</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Use descriptive names</td>
            <td><code>customer_email</code></td>
            <td>Better than <code>ce</code> or <code>col1</code></td>
          </tr>
          <tr>
            <td>Use lowercase with underscores</td>
            <td><code>order_items</code></td>
            <td>More readable than <code>OrderItems</code></td>
          </tr>
          <tr>
            <td>Table names should be plural</td>
            <td><code>customers</code></td>
            <td>Represents multiple records</td>
          </tr>
          <tr>
            <td>Avoid reserved keywords</td>
            <td><code>user_table</code></td>
            <td>Not <code>user</code> (reserved)</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>String Literals</h2>
      <p>
        String values in SQL must be enclosed in single quotes:
      </p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers 
WHERE CustomerName = 'Alfreds Futterkiste';`} 
        language="sql" 
      />
      <p>
        If your string contains a single quote, you need to escape it by using two single quotes:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          WHERE CustomerName = 'O''Reilly''s Store';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Numeric Values</h2>
      <p>
        Numeric values should NOT be enclosed in quotes:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Products WHERE Price = 18.95; -- Correct<br/>
          SELECT * FROM Products WHERE Price = '18.95'; -- May work but not recommended
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Practice Examples</h2>
      <p>Let's practice with a few complete SQL statements:</p>
      
      <TryItYourselfEditor 
        initialCode={`-- Select specific columns
SELECT CustomerName, City, Country
FROM Customers;

-- Select with filtering
SELECT * FROM Customers
WHERE Country = 'Germany';

-- Select with sorting
SELECT * FROM Products
ORDER BY Price DESC;`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Best Practice:</strong> Always test your SQL queries on a development or test database before running them on production data. A single mistake in an UPDATE or DELETE statement can cause irreversible data loss!</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/introduction"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/select"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLSyntax;