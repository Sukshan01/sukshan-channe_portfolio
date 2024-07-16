import React, {useState} from 'react'

import images from '../../images/imgpath';

import "./Navbar.css"

const Navbar = () => {


    const handleLogoClick = () => {
        window.location.href = '/';
    };

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className= "navbar">
        <img src={images.logo} alt="LOGO" className='navbar-logo' onClick={handleLogoClick}/>

        <div className="navbar-menu">
            

<img className="navbar-menuBtn" src={menuOpen ? images.closeIcon : images.menuIcon} alt='menu-button' onClick={() => {setMenuOpen(!menuOpen)}} />




       <ul className={`${menuOpen ? "navbar-menuopen" : "navbar-menuItems"}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </div>

    </nav>
  )
}

export default Navbar
