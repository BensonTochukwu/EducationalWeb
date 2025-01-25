import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction">
      <h2 className="introduction-heading">What do you want to learn today?</h2>
      <p className="introduction-text">
        Start exploring a variety of topics and discover new knowledge every day!
      </p>
      <a href="#topics" className="explore-link">
        Explore Topics
      </a>
    </section>
  );
};

export default Introduction;

