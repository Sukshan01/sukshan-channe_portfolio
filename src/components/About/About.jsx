import React from 'react'


import images from '../../images/imgpath';
import "./About.css";

const About = () => {
  return (
    <section className="about-container" id='about'>

        <h2 className='about-title'>About</h2>
        <div className='about-content'>
            <img src={images.aboutImg} alt='Me sitting with a laptop' className='aboutImg' />

            <ul className='aboutItems'>
                <li className='aboutItem'>
                    <img src={images.cursorIcon} alt='Cursor Icon'/>
                    <div className='aboutItemText'>
                        <h1>Software Developer</h1>
                        <p>
                            
                        Specializing in Java development, I create efficient solutions by leveraging strong knowledge of data structures and algorithms. Experienced in platforms like LeetCode and GeeksForGeeks, I excel at problem-solving to deliver impactful software solutions.
                        </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={images.serverIcon} alt='Server Icon'/>
                    <div className='aboutItemText'>
                        <h1>Frontend Developer</h1>
                        <p>
                        As a frontend developer, I excel in ReactJS, crafting responsive websites with stunning user interfaces. My expertise lies in creating engaging user experiences through innovative frontend design techniques.                        </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={images.uiIcon} alt='UI Icon'/>
                    <div className='aboutItemText'>
                        <h1>Backend Developer</h1>
                        <p>
                        As a backend developer, I specialize in Node.js and Express.js, proficiently managing data storage in MSSQL or MongoDB databases. My focus is on building efficient backend solutions that ensure seamless data management and optimal performance.                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default About
