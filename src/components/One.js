
import React from 'react';
import './One.css'; // Assuming you have a CSS file for styling

const One = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Yoga Studio</h1>
      </header>

      <section className="about-section">
    
        <p>
          Our yoga studio is dedicated to promoting physical, mental, and
          spiritual well-being. Join us on a journey to discover the
          transformative power of yoga.
        </p>
      </section>

      <section className="classes-section">
        <h2>Yoga is the music of the soul. Let your practice be the dance.</h2>
        <ul className='ram'>
          <li>Hatha Yoga</li>
          <li>Vinyasa Flow</li> <li>Jnana Yoga</li>
          <li>Ashtanga Yoga</li>  <li>Power Yoga</li>
          <li>Raja Yoga</li> <li>Karma Yoga</li> <li>Bhakti Yoga</li> <li>Kundalini Yoga</li>
          {/* Add more yoga classes */}
        </ul>
      </section>
      
    </div>
  );
};

export default One;
