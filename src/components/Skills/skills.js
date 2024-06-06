import React from 'react';
import './skills.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';

const Skills = () => (
  <div className="skills">
    <h2>My Skills</h2>
    <div className="skills-container">
      <div className="skill-item">
        <FaReact className="skill-icon" />
        <h3>React</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <SiJavascript className="skill-icon" />
        <h3>JavaScript</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '85%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <FaNodeJs className="skill-icon" />
        <h3>Node.js</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <FaDatabase className="skill-icon" />
        <h3>Databases</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '75%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <SiHtml5 className="skill-icon" />
        <h3>HTML5</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '95%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <SiCss3 className="skill-icon" />
        <h3>CSS3</h3>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
