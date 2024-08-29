import React from "react";
import "./Footer.css"; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Aztec Infrastructure (K) LTD. is dedicated to providing top-notch
            water solutions. With years of experience and a commitment to
            excellence, we ensure that every project meets the highest
            standards.
          </p>
        </div>
        <div className="footer-quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aztec Infrastructure (K) LTD. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
