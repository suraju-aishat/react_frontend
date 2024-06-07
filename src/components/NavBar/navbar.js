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