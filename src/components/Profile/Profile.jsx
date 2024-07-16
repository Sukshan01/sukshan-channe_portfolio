import React from 'react'
import images from '../../images/imgpath'

import "./Profile.css";

const Profile = () => {

  const image_url = process.env.REACT_APP_IMAGE_URL;

  console.log(image_url);


  const handleDownloadResume = () => {

    const resumeUrl = 'https://drive.google.com/file/d/1jAQTbHdxnhrAtEu8zSdXQ-FLz3qfi7aZ/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  }
  return <section className='profile-container'>
    <div className='profile-content'>
     <h1 className='profile-title'>Hi, I'm Sukshan</h1> 
     <p className='profile-description'>
     A passionate and dedicated undergraduate student pursuing my studies at the prestigious Indian Institute of Information Technology Vadodara. 
     Proficient in ReactJS, Java, Node.js, and Express.js, I'm passionate about crafting innovative software solutions. With expertise in Frontend and Backend Development, backed by solid knowledge of Data Structures and Algorithms, I'm driven to make a significant impact in the Tech Industry.

     </p>

     <div className='profile-button'>
     <a href="mailto:sukshanchanne@gmail.com" className='contactBtn' onClick={handleDownloadResume}>View Resume</a>
     <a href="#contact" className='contactBtn'>Contact Me</a>
     </div>

     




    </div>

    <img src={images.pic3} alt="Sukshan's" className='heroImage'/>

    <div className='topBlur' />
    <div className='bottomBlur' />




  </section>
}

export default Profile
