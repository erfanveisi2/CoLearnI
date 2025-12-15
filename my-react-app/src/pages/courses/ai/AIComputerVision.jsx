import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AIComputerVision = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Computer Vision (CV)</h1>
      <p className={styles.introParagraph}>
        Computer Vision is the field of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs, and take actions or make recommendations based on that information.
      </p>
      <div className={styles.infoBox}>
        <p><strong>In short:</strong> If AI enables computers to "think," Computer Vision enables them to "see."</p>
      </div>

      <h2 className={styles.subsectionTitle}>How Computers "See"</h2>
      <p>
        To a computer, an image is just a vast grid of numbers. A black and white image is a 2D grid of pixel values (0 to 255, from black to white). A color image is usually three grids stacked together (Red, Green, and Blue channels).
      </p>
      <p>
        CV algorithms use Convolutional Neural Networks (CNNs) to look for patterns in these number grids—starting with simple lines and curves, and building up to complex objects like faces or cars.
      </p>

      <h2 className={styles.subsectionTitle}>Core CV Tasks</h2>
      <ul>
        <li><strong>Image Classification:</strong> "Is there a cat in this picture?" (Yes/No)</li>
        <li><strong>Object Detection:</strong> "Where are the cars in this picture?" (Draws boxes around them)</li>
        <li><strong>Image Segmentation:</strong> accurately outlining the exact pixels that belong to an object (crucial for medical imaging and self-driving cars).</li>
        <li><strong>Facial Recognition:</strong> Identifying a specific person from their face.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Real-World Applications</h2>
      <ul>
        <li><strong>Autonomous Vehicles:</strong> Detecting lanes, traffic lights, pedestrians, and other vehicles.</li>
        <li><strong>Healthcare:</strong> Analyzing X-rays and MRI scans to detect tumors faster than human radiologists.</li>
        <li><strong>Retail:</strong> Cashier-less stores (like Amazon Go) that track what you pick up off the shelf.</li>
        <li><strong>Agriculture:</strong> Drones monitoring crops for disease or dryness from the sky.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/nlp" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/ethics" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIComputerVision;