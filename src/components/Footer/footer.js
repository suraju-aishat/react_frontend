import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
