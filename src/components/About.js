// About.js

import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Siva Anjali',
      role: 'Yoga Instructor',
      bio: 'Passionate about spreading the joy and benefits of yoga to all.',
    },
    {
      id: 2,
      name: 'Thanuja',
      role: 'Wellness Expert',
      bio: 'Dedicated to helping individuals achieve holistic well-being through yoga and mindfulness.',
    },
    {
      id: 2,
      name: 'Yasaswini',
      role: 'Wellness Expert',
      bio: 'Dedicated to helping individuals achieve holistic well-being through yoga and mindfulness.',
    },
    // Add more team members as needed
  ];

  return (
    <div className="about-container">
      <h2>Our Team</h2>
      <div className="card-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
