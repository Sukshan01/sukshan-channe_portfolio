import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projects from '../../data/projects.json';
import './Projects.css'
import ProjectCard from './ProjectCard';



const Projects = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  

  console.log(projects);


  return (
    <section className='project-container' id='projects'>
        <h2 className='project-title'>Projects</h2>
        

      <Slider {...settings} className="projects-slider">
        {projects.map((project, id) => (
          <div key={id} className="project-slide">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
       
    </section>
  )

}






export default Projects
