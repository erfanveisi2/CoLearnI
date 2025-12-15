import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const SQLIntro = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>SQL Introduction</h1>
      <p className={styles.introParagraph}>
        SQL (Structured Query Language) is the standard language for dealing with Relational Databases.
        It allows you to create, retrieve, update, and delete data from databases like MySQL, PostgreSQL, SQL Server, and Oracle.
      </p>

      

[Image of SQL RDBMS table structure]


      <h2 className={styles.subsectionTitle}>What is Data?</h2>
      <p>
        In the digital world, data is everywhere. Your user profile, your order history, your high scores—all of this is stored in a database.
        SQL is the language we use to talk to that database.
      </p>

      <h2 className={styles.subsectionTitle}>RDBMS (Relational Database Management System)</h2>
      <p>
        SQL is built on top of RDBMS. The data in an RDBMS is stored in database objects called <strong>tables</strong>.
        A table is a collection of related data entries and it consists of columns and rows.
      </p>

      <h3 className={styles.subsectionTitle}>Key Concepts</h3>
      <table className={styles.table}>
        <thead><tr><th>Term</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Table</strong></td><td>A collection of related data (e.g., "Customers").</td></tr>
          <tr><td><strong>Row (Record)</strong></td><td>A single entry in a table (e.g., one specific customer).</td></tr>
          <tr><td><strong>Column (Field)</strong></td><td>A specific piece of information (e.g., "Email Address").</td></tr>
          <tr><td><strong>Primary Key</strong></td><td>A unique ID that identifies a specific row.</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Example: The "Customers" Table</h2>
      <p>Imagine a table named <code>Customers</code>:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>CustomerName</th>
            <th>ContactName</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ana Trujillo</td>
            <td>Ana Trujillo</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Antonio Moreno</td>
            <td>Antonio Moreno</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.infoBox}>
        <p>This table contains 3 records (rows) and 4 columns (CustomerID, CustomerName, ContactName, Country).</p>
      </div>

      <h2 className={styles.subsectionTitle}>What Can SQL Do?</h2>
      <ul className={styles.list}>
        <li>SQL can execute queries against a database</li>
        <li>SQL can retrieve data from a database</li>
        <li>SQL can insert records in a database</li>
        <li>SQL can update records in a database</li>
        <li>SQL can delete records from a database</li>
        <li>SQL can create new databases and tables</li>
      </ul>

      <h2 className={styles.subsectionTitle}>SQL vs NoSQL</h2>
      <p>
        You might hear about "NoSQL" databases (like MongoDB). 
        <strong>SQL databases</strong> (Relational) are table-based and strict about data structure.
        <strong>NoSQL databases</strong> (Non-Relational) are document-based and flexible.
        SQL is still the industry standard for financial and structured data.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/courses"><button className={styles.prevButton}>❮ Course Menu</button></Link>
        <Link to="/course/sql/syntax"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default SQLIntro;