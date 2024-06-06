import React from 'react';
import './about.css';
import profilePic from '../../assets/portfolio-2.png';  

const About = () => {
  return (
    


  <div className='about' id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className='about-text'>
        <p>
        I'm a developer with a passion for creating beautiful and functional
        web applications. With a background, I bring a
        unique perspective to every project I work on.
        </p>
      </div>
    </div>
  </div>
)
}

export default About;

