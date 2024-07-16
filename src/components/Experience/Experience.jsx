import React from 'react'

import skills from '../../data/skills.json' 
import history from '../../data/history.json'
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-container" id='experience'>
        <h2 className="experience-title">Experience</h2>

        <div className='experience-content'>
            <div className='skills'>
        {skills.map((skill, id) => {

            return(

                <div key={id} className='skill'>

                    <div className='skillImageContainer'>
                        {/* <img src={skill.imageSrc} alt='Skills'/> */}
                        {/* <img src={images.htmlIcon} alt='Skills'/> */}

                        <img src={require(`../../${skill.imageSrc}`)} alt='Skills'/>

                      
                    </div>
                    <p>{skill.title}</p>

                </div>
            )
        })}

            </div>

            <ul className='history'>
                {history.map((historyItem, id) => {

                    return <li key={id} className='historyItem'>

                        <img src={require(`../../${historyItem.imageSrc}`)} 
                        alt={`${historyItem.organisation} Logo`} />

                        <div className='historyItemDetails'>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                            <ul >
                                {historyItem.experiences.map((experience, id) => {
                                    return <li key={id} >{experience}</li>
                                })}
                            </ul>
                        </div>

                    </li>

                    


                }
                )
            }

            </ul>
        </div>

    </section>
  )
}

export default Experience
