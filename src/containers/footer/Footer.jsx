import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      {/* <div className="gpt3__footer-links_logo">
        <h1 className='logo-heading'>GPT 2.0</h1>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Ahatasam Siam</p>
        <p>+8801750013906</p>
        <p>ahatasamul.developer@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      {
        <p>{new Date().getFullYear()} GPT 2.0. All rights reserved by Ahatasam Siam</p>
      }
    </div>
  </div>
);

export default Footer;
