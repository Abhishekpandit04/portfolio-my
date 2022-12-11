import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer=()=> {
  return (
   <footer> 
    <a href='#' className='footer__logo'>Abhishek</a>
    <ul className='permalink'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href='https://github.com/Abhishekpandit04' target='_blank'><BsGithub/></a>
      <a href='https://www.instagram.com/abhishekpandit04/' target='_blank'><BsInstagram/></a>
      <a href='https://www.linkedin.com/in/abhishek-pandit-2792591a6/' target='_blank'><BsLinkedin/></a>
    </div>
   </footer>
  )
}

export default footer