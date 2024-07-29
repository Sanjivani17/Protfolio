import React from 'react'
import './Contact.css'
import mailImage from '../../assets/mail-icon.png'
import contactImage from '../../assets/contact-icon.png'
import locationImage from '../../assets/location-icon.png'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3b35f9c4-387f-4f5d-9f82-68bb93a6283c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src="" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailImage} alt="" /><p>sanjivanibarve17@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={contactImage} alt="" /><p>+918329846305</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationImage} alt="" /><p>Pune, Maharashtra,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='email' name='email'/>
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">
                    Submit Now
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
