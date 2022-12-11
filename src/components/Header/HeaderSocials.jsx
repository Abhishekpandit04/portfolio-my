import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import{AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocial = () =>{
  return (
    <div className="header_social">
       <a href='https://www.linkedin.com/in/abhishek-pandit-2792591a6/' target='_blank'><AiFillLinkedin/></a>
        <a href='https://github.com/Abhishekpandit04' target='_blank'><AiOutlineGithub/></a>
        <a href='https://www.instagram.com/abhishekpandit04/' target='_blank'><AiOutlineInstagram/></a>
        
    </div>
  )
}

export default HeaderSocial