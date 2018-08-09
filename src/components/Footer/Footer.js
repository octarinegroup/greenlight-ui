import React from 'react'

import './Footer.css'

export const Footer = props => (
  <div className="footer-wrapper">
    <div className="footer-links-wrapper">
      <div className="footer-links-item">
        <div className="footer-links-header">
          About
        </div>
        <div className="footer-links">
          <a href="/">Company</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
      <div className="footer-links-item">
        <div className="footer-links-header">
          Helpful Links
        </div>
        <div className="footer-links">
          <a href="/">Blog</a>
          <a href="/">Product Updates</a>
          <a href="/">Help Center</a>
        </div>
      </div>
      <div className="footer-links-item">
        <div className="footer-links-header">
          Contact
        </div>
        <div className="footer-icons">
          <img src="/assets/icons/envelope_icon.png" alt="mail" />
          <img src="/assets/icons/github_icon.png" alt="github" />
          <img src="/assets/icons/instagram_icon.png" alt="instagram" />
          <img src="/assets/icons/twitter_icon.png" alt="twitter" />
        </div>
        <div className="footer-info">
          <span>Questions? Reach out!</span>
          <a href="mailto:info@greenlight.com">info@greenlight.com</a>
        </div>
      </div>
    </div>
    <div className="footer-copyright-wrapper">
      <span>Greenlight &copy; {(new Date().getFullYear())} Octarine Group, LLC</span>
    </div>
  </div>
)