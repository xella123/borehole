import React from "react";
import "./contact.css"; // Import the CSS file for styling

function ContactSection() {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <h2>Office Name</h2>
          <p>Aztec Infrastructure (K) LTD.</p>
        </div>
        <div className="contact-item">
          <h2>Location</h2>
          <p>123 Moi Avenue, Nairobi, WA 98000</p>
        </div>
        <div className="contact-item">
          <h2>Telephone</h2>
          <p>0795542608</p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:info@reliableboreholes.com">
              aztecgroupkenya01@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
