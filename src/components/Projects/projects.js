import React from 'react';
import './projects.css';
import project1 from '../../assets/web2.jpg';
import project2 from '../../assets/wn1.jpg';
import project3 from '../../assets/wn3.jpg';

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: project1,
    link: "#"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: project2,
    link: "#"
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    image: project3,
    link: "#"
  }
];

const Projects = () => {
    return (
  <div className="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project1} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3>HTML</h3>
            <p>How to develop html page</p>
            <a href='#' className="project-link">View Project</a>
          </div>
        </div>
      ))}
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project2} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3>CSS</h3>
            <p>How to develop CSS page</p>
            <a href='#' className="project-link">View Project</a>
          </div>
        </div>
      ))}
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project3} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3>JavaScript</h3>
            <p>How to develop JavaScript page</p>
            <a href='#' className="project-link">View Project</a>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Projects;
