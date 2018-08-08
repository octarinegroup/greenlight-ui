import React from 'react'

import './ProblemSection.css'

export const ProblemSection = props => (
  <div className="problem-section-wrapper">
    <div className="problem-inner-wrapper">
      <div className="problem-content-wrapper">
        <div className="problem-content-header">
          Ideas come frequently, but are hard to evaluate.
        </div>
        <div className="problem-content-sub valign-wrapper">
          <img src="/assets/images/problemSection_icon1.png" alt="problem icon" />
          <span>We think of ideas regularly, but struggle to decide if they're worth pursuing.</span>
        </div>
      </div>
      <div className="problem-content-wrapper">
        <div className="problem-content-header">
          You need a way to reduce uncertainity.
        </div>
        <div className="problem-content-sub valign-wrapper">
          <img src="/assets/images/problemSection_icon2.png" alt="problem icon" />
          <span>Conducting reliable, detailed market research is invaluable.</span>
        </div>
      </div>
      <div className="problem-content-wrapper">
        <div className="problem-content-header">
          Don't let good ideas go to waste.
        </div>
        <div className="problem-content-sub valign-wrapper">
          <img src="/assets/images/problemSection_icon3.png" alt="problem icon" />
          <span>Make an informed decision so you can pick your battle wisely.</span>
        </div>
      </div>
    </div>
  </div>
)