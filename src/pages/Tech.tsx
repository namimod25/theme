import React from "react";
import "../styles/Tech.css";




interface TechItem {
    name: string;
    icon: string;
    description: string;
    proficiency: number; // Persentase keahlian (0-100)
  }
  
  const techStack: TechItem[] = [
    {
      name: 'React',
      icon: 'fab fa-react',
      description: 'Modern JavaScript library for building UI',
      proficiency: 90
    },
    {
      name: 'TypeScript',
      icon: 'fab fa-js',
      description: 'Typed JavaScript for scalable applications',
      proficiency: 85
    },
    {
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      description: 'Advanced styling with animations',
      proficiency: 95
    },
    {
      name: 'Node.js',
      icon: 'fab fa-node',
      description: 'JavaScript runtime for backend',
      proficiency: 80
    }
  ];

const Tech: React.FC = () => {
    return (
      <div className="page-container tech">
        <div className="content-wrapper animate-in">
          <h1 className="title">Tech Stack</h1>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <i className={`${tech.icon} tech-icon`}></i>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${tech.proficiency}%` }}
                  >
                    <span className="progress-value">{tech.proficiency}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Tech;