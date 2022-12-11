import React from 'react'
import AbhishekCV from '../../assets/AbhishekCV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={AbhishekCV} download className='btn'>Download CV</a>
        <a href="#contact"className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA  