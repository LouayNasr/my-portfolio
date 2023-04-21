import React from 'react';
import './Sidebar.css';
import profileImage from '../assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-name">Louay Nasr</div>
      <div className='social-icons'>
        <div className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <a href="#home" className="sidebar-nav-link">
            <FontAwesomeIcon icon={faHome} className="sidebar-nav-icon" />
            Home
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="#about" className="sidebar-nav-link">
            <FontAwesomeIcon icon={faUser} className="sidebar-nav-icon" />
            About
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="#portfolio" className="sidebar-nav-link">
            <FontAwesomeIcon icon={faBriefcase} className="sidebar-nav-icon" />
            Portfolio
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="#contact" className="sidebar-nav-link">
            <FontAwesomeIcon icon={faEnvelope} className="sidebar-nav-icon" />
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;