import React from "react";
 import image from '../../assets/logo.png'

import './navbar.css'
import { Link } from "react-router-dom";

const Navbar  = ()=>{
    return (
     <>
     <header>
        <nav className='navbar'>
          <a href="#home" className='logo'>
            <img src={image} alt="" height={50} width={50}/> 
            <span>Matias</span>
          </a>
          <ul className='listitems'>
            <li><Link className='yellow' to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/works">WORKS</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/testimonial">TESTIMONIAL</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <a href="#contact" className='uff'>Let's Talk 
            
          </a>
        </nav>
      </header>
     </>
    )
}
export default Navbar