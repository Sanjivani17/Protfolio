import React from 'react'
import './Hero.css'
import profileImage from '../../assets/Profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileImage} alt="" />
        <h1><span>I'm Sanjivani Barve,</span> Web Developer</h1>
        <p>I am a frontend and backend developer.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}
export default Hero
