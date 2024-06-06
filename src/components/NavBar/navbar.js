import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
        <nav className='navbar'>
            <a href="index.html" className='nav_logo'>Aishat</a>

            <div className='Menu'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100}  duration={500} className='MenuListItem'>Home</Link>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-1}  duration={500} className='MenuListItem'>About</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-1}  duration={500} className='MenuListItem'>Skills</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-1}  duration={500} className='MenuListItem'>Projects</Link>
                <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-1}  duration={500} className='MenuListItem'>Contact</Link>
            </div>

            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100}  duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-1}  duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-1}  duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-1}  duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-1}  duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
  )
}

export default Navbar;

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
      
      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;*/



/*import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MyPortfolio</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-links" onClick={toggleMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;*/