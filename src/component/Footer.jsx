// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBriefcase, faList, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faBriefcase} />
        <FontAwesomeIcon icon={faList} />
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
    </footer>
  );
};

export default Footer;