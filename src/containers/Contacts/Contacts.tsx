import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <h3 className="contacts-title">Contacts</h3>
      <p>
        We are always happy to hear your questions, suggestions, and feedback!
        You can reach out to us using any of the methods below.
      </p>
      <div className="contacts-email">
        <strong className="email-title">Email:</strong>
        <span className="email-desc">For general inquiries and collaboration:</span>
        <a href="#" className="contacts-link">editor@yourblog.com</a>
        <span className="email-desc">For questions related to content and editorial matters:</span>
        <a href="#" className="contacts-link">editor@yourblog.com</a>
      </div>
      <div className="contacts-phone">
        <strong className="phone-title">Phone:</strong>
        <span className="phone-desc">You can call us at:</span>
        <b><a href="#" className="contacts-link">+1 (123) 456-7890</a></b>
        <b>Mon-Fri, 10:00 AM - 6:00 PM</b>
      </div>
      <div className="contacts-address">
        <strong className="address-title">Address:</strong>
        <span className="address-desc">Our office is located at:</span>
        <b className="address-info">1 Sample Street, Office 2, City, State, ZIP Code</b>
        <b className="address-info">Office hours: Mon-Fri, 10:00 AM - 6:00 PM</b>
      </div>
      <div className="contacts-media">
        <strong className="media-title">Social Media:</strong>
        <span className="media-desc">Follow our updates and join the discussions on social media:</span>
        <ul>
          <li>
            <a href="#" className="contacts-link">Facebook</a>
          </li>
          <li>
            <a href="#" className="contacts-link">Instagram</a>
          </li>
          <li>
            <a href="#" className="contacts-link">Twitter</a>
          </li>
          <li>
            <a href="#" className="contacts-link">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;