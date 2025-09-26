import React from 'react';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <div className="footer-social">
      <a href="https://www.facebook.com/profile.php?id=61581396842454&sk=about" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.instagram.com/midlumes?igsh=MXV1eXZxNnlpd2h1ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.linkedin.com/company/midlumes/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a href="https://saquibfaraz.github.io/projects.html" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="http://www.youtube.com/@Midlumes" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
    </div>
    <div className="footer-desc">
      <h2>Midlumes Consultancy</h2>
      <p>
        We at MIDLUMES CONSULTANCY deliver quality, creativity, and innovation with a global mindset, empowering businesses to succeed
      </p>
    </div>
    <ul className="footer-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#bookings">Bookings</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer-copyright">
      © 2025 Midlumes Consultancy Services Limited. All rights reserved. Made with <span className="footer-heart"><FaHeart /></span>
    </div>
    
  </div>
);

export default Footer;