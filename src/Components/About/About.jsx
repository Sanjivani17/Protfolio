import React from 'react'
import './About.css'
import profileImage from '../../assets/Profile_img.jpg';
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profileImage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p> HTML & CSS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p> React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p> Javascript</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p> C & CPP</p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0</h1>
                <p>Year Of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Project Completed</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default About
