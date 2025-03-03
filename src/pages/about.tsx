import '../styles/About.css';
import React from 'react';



//import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="page-container about">
      <div className="content-wrapper">
        <h1 className="title animate-in">About Me</h1>
        <div className="card-container animate-in">
          <div className="card">
            <p>Hello! I'm a passionate developer with experience in modern web technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
