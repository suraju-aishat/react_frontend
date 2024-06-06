import React from 'react';
import './home.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/w1280.jpg'

const Home = () => {
  return (
    <section id="home">
        <div className="text">
            <span className='hi'>Hi,</span>    
            <span className='text1'>I'm <span className='name'>Aishat</span> <br />Web Developer</span>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
        
    </section>

  )
}

export default Home;