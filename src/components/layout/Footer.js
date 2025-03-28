import React from 'react';
import footerData from '../../data/footerData';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <h1>{footerData.title}</h1>
      <p>{footerData.description}</p>
    </div>
  );
};

export default Footer;
