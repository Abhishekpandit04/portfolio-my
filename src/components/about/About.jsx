import React from 'react'
import './about.css'
import ME from '../../assets/me1.png'
import{TbAward} from 'react-icons/tb'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import{TbFolders} from 'react-icons/tb'
const About=()=>{
    return(
        <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="About Image" />

                </div>

            </div>
            <div className='about__content'>
            <div className='about__cards'>
                <article className='about__card'>
                    <TbAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>1+ Years Working</small>
                </article>
                <article className='about__card'>
                    <AiOutlineUsergroupAdd className='about__icon'/>
                    <h5>Student</h5>
                    <small>College Student</small>
                </article>
                <article className='about__card'>
                    <TbFolders className='about__icon'/>
                    <h5>Project</h5>
                    <small>2+ Completed</small>
                </article>

            </div>
            <p> I am a student of Alva's institute of engineering and technology major in Computer Science. 
            I have extensive experience in developing websites utilizing various open-source packages.
            I have a passion for computer programming 
                and developing website.I am a quick learner with a fun, outgoing personality. 
                I am open to learning new things and getting involved with new projects that can help me learn or apply all that I have 
                learned throughout my college career.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk </a>
            
            </div>

        </div>
        </section>
    )
}
export default About