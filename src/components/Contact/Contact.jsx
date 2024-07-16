import React from 'react'

import images from '../../images/imgpath'

import './Contact.css'

const Contact = () => {
  return (
    <footer className='footer-container' id='contact'>
        <div className='footer-text'>
            <h2>Contact</h2>
            <p>Feel free to react out !</p>
        </div>


        <ul className='footer-links'>
            <li className='footer-link'>
                <img src={images.emailIcon}  alt='Email Icon'/>
                <a href='mailto:sukshanchanne@gmail.com'>sukshanchanne@gmail.com</a>
            </li>
            <li className='footer-link'>
                <img src={images.githubIcon}  alt='Github Icon'/>
                <a href='https://github.com/Sukshan01'>github.com/Sukshan01</a>
            </li>
            <li className='footer-link'>
                <img src={images.linkedinIcon}  alt='LinkedIn Icon'/>
                <a href='https://www.linkedin.com/in/sukshan-channe'>linkedin.com/in/sukshan-channe/</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
