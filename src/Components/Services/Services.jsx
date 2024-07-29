import React from 'react'
import './Services.css'
import profileImage from '../../assets/Profile_img.jpg';
import Services_Data from '../../assets/services_data';
import arrowImage from '../../assets/arrow.png';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt="" />
        </div>
     <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrowImage} alt="" />
                </div>
            </div>
        })}
     </div>
    </div>
  )
}

export default Services;
