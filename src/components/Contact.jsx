import React from 'react';
import './Contact.css';
import myemail from '../Image/gmail.png';
import linkedin from '../Image/linkedin.png';
import github from '../Image/github.png';

function Contact() {
  return (
    <>
    <div className='containers'>
    <h3>Contact Me</h3>
    </div>  
    <div id="contain">
    <a href="mohamedmorabit827@gmail" rel={"noreferrer"} target={'_blank'}><img src={myemail} alt="gmail" className='imgcontact'/></a>
    <a href="https://www.linkedin.com/in/mohamed-elmorabit-136654257/" rel={"noreferrer"} target={'_blank'}><img src={linkedin} alt="linkedin" className='imgcontact'/></a>
    <a href="https://github.com/ELMORABITMOHAMMED" rel={"noreferrer"} target={'_blank'}><img src={github} alt="github" className='imgcontact'/></a>
    <p>E-Mail : mohamedmorabit827@gmail</p>
    <p>ELMORABITMOHAMMED</p>
    <p>ELMORABITMOHAMMED</p>
    </div>
    </>
  )
}

export default Contact