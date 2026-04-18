import React from 'react';
import footerData from '../../data/footerData';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer id="more-section" class="footer">
        <div class="footer-content">
          <div class="footer-brand">
            <h2>{footerData.title}</h2>
            <p>{footerData.description}</p>
          </div>
          <div class="footer-links">
            <div>
              <h4>{footerData.resourcesTitle}</h4>
              {footerData.resources.map((resources, index) => (
                <ul key={index}>
                  <li>
                    <a href={resources.url}>{resources.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div class="footer-social">
            <div>
              <h4>{footerData.contactsTitle}</h4>
              {footerData.contacts.map((contacts, index) => (
                <ul key={index}>
                  <li>
                    <a href={contacts.url}>{contacts.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; <span id="year"></span> {footerData.footerBottom}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
