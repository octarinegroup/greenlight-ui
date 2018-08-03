import React from 'react'

import './Navbar.css'

export const Navbar = (props) => (
  <div className="navbar-wrapper valign-wrapper">
    <div className="navbar-logo">
      <img src="/assets/images/greenlightlogo.png" alt="greenlight logo" />
    </div>
    <div className="navbar-buttons-wrapper">
      <button className="navbar-login">Login.</button>
      <button className="navbar-getstarted">Get Started</button>
    </div>
  </div>
)