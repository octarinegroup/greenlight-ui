import React from 'react'

import './Banner.css'

export const Banner = (props) => (
  <div className="banner-wrapper">
    <div className="banner-inner-wrapper">
      <div className="banner-text-wrapper">
        <div className="banner-header">
          Validate new ideas by seamlessly engaging your target market
        </div>
        <div className="banner-subheader">
          Create surveys | Reach your audience | Analyze Results
        </div>
      </div>
      <div className="banner-button">
        <button>Get Started</button>
      </div>
    </div>
    <div className="banner-image">
      <img src="/assets/images/banner.png" alt="banner" />
    </div>
  </div>
)