// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faComment } from '@fortawesome/free-solid-svg-icons';
import Img from '../assets/10.jpeg'



const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        {/* Replace 'your-logo.png' with the path to your circular logo */}
        <img src={Img} alt="Logo" className="logo" />
      </div>
      <div className="icons-container">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faComment} className="icon" />
      </div>
    </header>
  );
};

export default Header;