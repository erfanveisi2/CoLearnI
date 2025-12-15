import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonNumbers = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Numbers</h1>
      <p className={styles.introParagraph}>
        Python supports integers, floating-point numbers, and complex numbers. Unlike languages like Java or C++, Python handles memory management for numbers automatically, allowing for arbitrarily large integers.
      </p>

      <TryItYourselfEditor 
        initialCode={`x = 1    # int
y = 2.8  # float
z = 1j   # complex

print(type(x))
print(type(y))
print(type(z))`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>1. Int (Integer)</h2>
      <p>
        Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
        Python 3 automatically handles "Big Integers". You don't need to worry about integer overflow like in C++ (where integers cap at 2 billion).
      </p>
      <TryItYourselfEditor 
        initialCode={`x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>2. Float (Floating Point)</h2>
      <p>
        Float is a number, positive or negative, containing one or more decimals. 
        Floats can also be scientific numbers with an "e" to indicate the power of 10.
      </p>
      <div className={styles.codeBlock}>
        <code>
          x = 1.10<br/>
          y = 1.0<br/>
          z = -35.59<br/>
          w = 35e3  # 35000.0
        </code>
      </div>

      <h3>Special Floats: Infinity and NaN</h3>
      <p>
        Floats can represent special values like Infinity (<code>inf</code>) and Not a Number (<code>nan</code>).
      </p>
      <TryItYourselfEditor 
        initialCode={`x = float("inf")
y = float("-inf")
z = float("nan")

print(x > 1000000000000000) # True`} 
        language="python" 
      />

      <div className={styles.infoBox}>
        <p><strong>Warning:</strong> Floating point numbers are approximations (IEEE 754). <br/>Example: <code>0.1 + 0.2</code> results in <code>0.30000000000000004</code>, not exactly 0.3.</p>
      </div>

      <h2 className={styles.subsectionTitle}>3. Complex Numbers</h2>
      <p>
        Complex numbers are written with a "j" as the imaginary part. Python is one of the few languages with built-in support for complex math, making it popular in engineering.
      </p>
      <TryItYourselfEditor 
        initialCode={`x = 3+5j
y = 5j
z = -5j

print(type(x))
print(x.real) # 3.0
print(x.imag) # 5.0`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Type Conversion</h2>
      <p>
        You can convert from one type to another with the <code>int()</code>, <code>float()</code>, and <code>complex()</code> methods.
        Note that you cannot convert complex numbers into another number type directly.
      </p>
      <div className={styles.codeBlock}>
        <code>
          x = 1<br/>
          a = float(x)  # 1.0<br/>
          b = complex(x) # (1+0j)
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The Random Module</h2>
      <p>
        Python does not have a <code>random()</code> function to make a random number, but Python has a built-in module called <code>random</code> that can be used to make random numbers.
      </p>
      <TryItYourselfEditor 
        initialCode={`import random

print(random.randrange(1, 10)) # Integer between 1 and 9
print(random.random())         # Float between 0.0 and 1.0
print(random.choice(['A', 'B', 'C'])) # Pick random item`} 
        language="python" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/python/data-types"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/casting"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonNumbers;