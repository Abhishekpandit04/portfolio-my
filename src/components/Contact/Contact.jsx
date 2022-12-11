import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BiMessageRounded} from 'react-icons/bi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncm58ae', 'template_e4k0ddm', form.current, '0Evqx0HDL3eclffdD')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__option1'>
    <article className='contact__option'>
    <MdOutlineMailOutline className='contact__option-icon'/>
    <h4>Email</h4>
    <a href="mailto:panditabhishek023@gmail.com" target="_blank">Send a message</a>
    </article>
    <article className='contact__option'>
    <BiMessageRounded className='contact__option-icon'/>
    <h4>Messenger</h4>
    <a href="https://www.facebook.com/profile.php?id=100036480976450&mibextid=ZbWKwL" target="_blank">Send a message</a>
    </article>
    <article className='contact__option'>
    <AiOutlineWhatsApp className='contact__option-icon'/>
    <h4>Whatsapp</h4>
    <a href="https://api.whatsapp.com/send?phone=+918736967428&text=Send20%a20%quote" target="_blank">Send a message</a>
    </article>
          </div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text"name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
  <button type="Submit" className='btn btn-primary'>Send Message</button>
</form>
      </div>
    </section>
  )
} 

export default Contact