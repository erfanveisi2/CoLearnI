import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const SQLAndOrNot = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL AND, OR and NOT Operators</h1>
      <p className={styles.introParagraph}>
        The <code>WHERE</code> clause can contain one or many conditions. To combine multiple conditions, we use the <code>AND</code>, <code>OR</code>, and <code>NOT</code> operators.
        These logical operators are fundamental for building complex queries and filtering data precisely.
      </p>

      <h2 className={styles.subsectionTitle}>Understanding Boolean Logic</h2>
      <p>
        Boolean operators allow you to create compound conditions. Think of them as the "glue" that connects multiple filter criteria:
      </p>
      <ul className={styles.list}>
        <li><strong>AND</strong> - All conditions must be true</li>
        <li><strong>OR</strong> - At least one condition must be true</li>
        <li><strong>NOT</strong> - Reverses the condition (true becomes false, false becomes true)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>The AND Operator</h2>
      <p>
        The <code>AND</code> operator displays a record if <strong>all</strong> the conditions separated by AND are TRUE.
        If any single condition is false, the entire expression is false.
      </p>

      <h3>Syntax</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name<br/>
          WHERE condition1 AND condition2 AND condition3 ...;
        </code>
      </div>

      <p>Example: Select customers from "Germany" AND the city is "Berlin":</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Germany' AND City = 'Berlin';`} 
        language="sql" 
      />

      <p>
        This query returns only customers that satisfy <em>both</em> conditions. If a customer is from Germany but lives in München (not Berlin), they won't be included.
      </p>

      <h3>AND Truth Table</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Condition 1</th>
            <th>Condition 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td><strong>TRUE</strong></td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td><strong>FALSE</strong></td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td><strong>FALSE</strong></td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td><strong>FALSE</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Multiple AND Conditions</h3>
      <p>You can chain multiple AND conditions together:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Products
WHERE Price > 10 AND Price < 50 AND CategoryID = 1;`} 
        language="sql" 
      />

      <p>
        This finds products that are: priced above $10, AND priced below $50, AND in category 1. All three conditions must be true.
      </p>

      <h2 className={styles.subsectionTitle}>The OR Operator</h2>
      <p>
        The <code>OR</code> operator displays a record if <strong>any</strong> of the conditions separated by OR is TRUE.
        Only one condition needs to be true for the entire expression to be true.
      </p>

      <h3>Syntax</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name<br/>
          WHERE condition1 OR condition2 OR condition3 ...;
        </code>
      </div>

      <p>Example: Select customers from "Germany" OR "Spain":</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';`} 
        language="sql" 
      />

      <p>
        This returns all customers from Germany and all customers from Spain. A customer only needs to be from one of these countries.
      </p>

      <h3>OR Truth Table</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Condition 1</th>
            <th>Condition 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td><strong>TRUE</strong></td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td><strong>TRUE</strong></td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td><strong>TRUE</strong></td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td><strong>FALSE</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Multiple OR Conditions</h3>
      <p>Find customers from multiple countries:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain' OR Country = 'France' OR Country = 'UK';`} 
        language="sql" 
      />

      <div className={styles.infoBox}>
        <p><strong>Tip:</strong> When you have many OR conditions on the same column, consider using <code>IN</code> instead:</p>
        <code>WHERE Country IN ('Germany', 'Spain', 'France', 'UK')</code>
      </div>

      <h2 className={styles.subsectionTitle}>The NOT Operator</h2>
      <p>
        The <code>NOT</code> operator displays a record if the condition(s) is NOT TRUE.
        It reverses the result of a condition.
      </p>

      <h3>Syntax</h3>
      <div className={styles.codeBlock}>
        <code>
          SELECT column1, column2, ...<br/>
          FROM table_name<br/>
          WHERE NOT condition;
        </code>
      </div>

      <p>Example: Select customers where country is NOT "Germany":</p>
      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE NOT Country = 'Germany';`} 
        language="sql" 
      />

      <p>
        This returns all customers except those from Germany. You could also write this as:
      </p>
      <div className={styles.codeBlock}>
        <code>
          SELECT * FROM Customers<br/>
          WHERE Country &lt;&gt; 'Germany';
        </code>
      </div>

      <h3>NOT with Other Operators</h3>
      <p>NOT can be combined with LIKE, IN, BETWEEN, etc.:</p>
      <div className={styles.codeBlock}>
        <code>
          -- Not starting with 'A'<br/>
          WHERE NOT CustomerName LIKE 'A%';<br/><br/>
          
          -- Not in the list<br/>
          WHERE Country NOT IN ('Germany', 'Spain');<br/><br/>
          
          -- Not in the range<br/>
          WHERE Price NOT BETWEEN 10 AND 50;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Combining AND, OR and NOT</h2>
      <p>
        You can combine these operators to create complex conditions. However, it's crucial to use <strong>parentheses</strong> to explicitly state the order of operations.
      </p>
      
      <div className={styles.infoBox}>
        <p><strong>Operator Precedence:</strong> By default, SQL evaluates operators in this order: NOT → AND → OR. Use parentheses to override this!</p>
      </div>

      <h3>Without Parentheses (Ambiguous)</h3>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          -- WRONG: Ambiguous logic<br/>
          SELECT * FROM Customers<br/>
          WHERE Country = 'Germany' OR Country = 'Spain' AND City = 'Berlin';
        </code>
      </div>
      <p>
        This might not do what you expect! Because AND has higher precedence than OR, this is interpreted as:
        <br/>
        <code>WHERE Country = 'Germany' OR (Country = 'Spain' AND City = 'Berlin')</code>
      </p>

      <h3>With Parentheses (Clear)</h3>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid green'}}>
        <code>
          -- CORRECT: Clear logic with parentheses<br/>
          SELECT * FROM Customers<br/>
          WHERE (Country = 'Germany' OR Country = 'Spain') AND City = 'Berlin';
        </code>
      </div>
      <p>
        This clearly states: "Get customers from Germany or Spain, but only if they're in Berlin."
      </p>

      <TryItYourselfEditor 
        initialCode={`SELECT * FROM Customers
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'München');`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Complex Query Examples</h2>

      <h3>Example 1: E-commerce Product Filter</h3>
      <p>Find products that are either on sale OR expensive, but NOT discontinued:</p>
      <TryItYourselfEditor 
        initialCode={`SELECT ProductName, Price, OnSale, Discontinued
FROM Products
WHERE (OnSale = 1 OR Price > 100) AND NOT Discontinued = 1;`} 
        language="sql" 
      />

      <h3>Example 2: Customer Segmentation</h3>
      <p>Find high-value customers (either spent a lot OR made many orders) from specific countries:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT CustomerName, TotalSpent, OrderCount<br/>
          FROM Customers<br/>
          WHERE (TotalSpent &gt; 5000 OR OrderCount &gt; 20)<br/>
          AND Country IN ('USA', 'UK', 'Canada');
        </code>
      </div>

      <h3>Example 3: Date Range with Exclusions</h3>
      <p>Find recent orders, but exclude cancelled ones:</p>
      <div className={styles.codeBlock}>
        <code>
          SELECT OrderID, OrderDate, Status<br/>
          FROM Orders<br/>
          WHERE OrderDate &gt;= '2024-01-01'<br/>
          AND NOT Status = 'Cancelled';
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Operator Precedence Deep Dive</h2>
      <p>
        Understanding operator precedence is crucial for writing correct queries:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Precedence</th>
            <th>Operator</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 (Highest)</td>
            <td>( )</td>
            <td>Parentheses - Always evaluated first</td>
          </tr>
          <tr>
            <td>2</td>
            <td>NOT</td>
            <td>Logical negation</td>
          </tr>
          <tr>
            <td>3</td>
            <td>AND</td>
            <td>Logical conjunction</td>
          </tr>
          <tr>
            <td>4 (Lowest)</td>
            <td>OR</td>
            <td>Logical disjunction</td>
          </tr>
        </tbody>
      </table>

      <h3>Example: How Precedence Works</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Query 1: No parentheses<br/>
          WHERE A = 1 OR B = 2 AND C = 3<br/><br/>
          
          -- Interpreted as:<br/>
          WHERE A = 1 OR (B = 2 AND C = 3)<br/><br/>
          
          -- Query 2: With parentheses<br/>
          WHERE (A = 1 OR B = 2) AND C = 3<br/><br/>
          
          -- Completely different meaning!
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Real-World Scenarios</h2>

      <h3>Scenario 1: Social Media - Find Active Users</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Find users who posted recently OR have many followers<br/>
          -- AND are verified<br/>
          SELECT Username, LastPostDate, FollowerCount<br/>
          FROM Users<br/>
          WHERE (LastPostDate &gt; '2024-01-01' OR FollowerCount &gt; 10000)<br/>
          AND IsVerified = 1;
        </code>
      </div>

      <h3>Scenario 2: HR - Employee Search</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Find senior employees OR high performers<br/>
          -- But exclude those on leave<br/>
          SELECT EmployeeName, YearsOfService, PerformanceRating<br/>
          FROM Employees<br/>
          WHERE (YearsOfService &gt; 10 OR PerformanceRating &gt;= 4.5)<br/>
          AND NOT OnLeave = 1;
        </code>
      </div>

      <h3>Scenario 3: Inventory - Restock Alert</h3>
      <div className={styles.codeBlock}>
        <code>
          -- Find items that need restocking:<br/>
          -- Low stock OR out of stock, AND popular category<br/>
          SELECT ProductName, StockLevel, Category<br/>
          FROM Inventory<br/>
          WHERE (StockLevel &lt; 10 OR StockLevel = 0)<br/>
          AND Category IN ('Electronics', 'Clothing', 'Food');
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Common Mistakes to Avoid</h2>

      <h3>Mistake 1: Forgetting Parentheses</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Ambiguous<br/>
          WHERE Status = 'Active' OR Status = 'Pending' AND Priority = 'High'<br/><br/>
          
          -- CORRECT: Clear intent<br/>
          WHERE (Status = 'Active' OR Status = 'Pending') AND Priority = 'High'
        </code>
      </div>

      <h3>Mistake 2: Using NOT Incorrectly</h3>
      <div className={styles.codeBlock}>
        <code>
          -- WRONG: Applying NOT to entire expression<br/>
          WHERE NOT Country = 'USA' AND State = 'NY'<br/>
          -- This means: (NOT Country = 'USA') AND State = 'NY'<br/><br/>
          
          -- CORRECT: Use parentheses<br/>
          WHERE NOT (Country = 'USA' AND State = 'NY')
        </code>
      </div>

      <h3>Mistake 3: Redundant Conditions</h3>
      <div className={styles.codeBlock}>
        <code>
          -- INEFFICIENT: Redundant<br/>
          WHERE Price &gt; 10 AND Price &gt; 20<br/>
          -- Second condition makes first one redundant<br/><br/>
          
          -- BETTER: Simplify<br/>
          WHERE Price &gt; 20
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Practice Exercises</h2>
      <p>Try building these queries:</p>
      <TryItYourselfEditor 
        initialCode={`-- Exercise 1: Find German customers in Berlin or München
SELECT * FROM Customers
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'München');

-- Exercise 2: Find products that are cheap OR on sale, but not discontinued
SELECT * FROM Products
WHERE (Price < 20 OR OnSale = 1) AND NOT Discontinued = 1;

-- Exercise 3: Find customers from USA or Canada with high order counts
SELECT * FROM Customers
WHERE (Country = 'USA' OR Country = 'Canada') AND OrderCount > 10;`} 
        language="sql" 
      />

      <h2 className={styles.subsectionTitle}>Performance Considerations</h2>
      <ul className={styles.list}>
        <li>✅ <strong>Put most restrictive conditions first:</strong> This helps the database optimize better</li>
        <li>✅ <strong>Use AND when possible:</strong> AND conditions can eliminate rows faster</li>
        <li>✅ <strong>Index columns used in conditions:</strong> Especially those in AND clauses</li>
        <li>❌ <strong>Avoid excessive OR conditions:</strong> Consider using IN or UNION instead</li>
      </ul>

      <div className={styles.infoBox}>
        <p><strong>Best Practice:</strong> Always use parentheses when combining AND, OR, and NOT, even if you know the precedence rules. It makes your queries more readable and maintainable!</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/sql/where"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/sql/order-by"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLAndOrNot;