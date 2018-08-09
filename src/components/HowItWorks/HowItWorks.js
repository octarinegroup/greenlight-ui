import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import './HowItWorks.css'

export const HowItWorks = props => (
  <div className="how-wrapper">
    <div className="how-header">
      How It Works
    </div>
    <div className="vertical-timeline-wrapper">
      <VerticalTimeline animate>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position="right"
        >
          <h3 className="vertical-timeline-element-subtitle">Stumble upon an idea</h3>
          <p className="valign-wrapper">
            <img src="/assets/images/lightbulb-male.png" alt="idea" />
            Maybe it’s for a new company, a feature for a product, or just a fun side project.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position="left"
        >
          <h3 className="vertical-timeline-element-subtitle">Create customizable surveys</h3>
          <p>
            Build, save, and reuse surveys that help you capture the key information you need.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position="right"
        >
          <h3 className="vertical-timeline-element-subtitle">Specify your target users</h3>
          <p>
            Describe their characteristics (e.g. college students, entrepreneurs, technologists). We’ll make sure your questions go to the right people.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position="left"
        >
          <h3 className="vertical-timeline-element-subtitle">Run idea validation experiments</h3>
          <div className="valign-wrapper">
            <div>
              <p>
                Specify a budget and dates for your research.
            </p>
              <p>
                Survey takers get paid to give you feedack.
            </p>
            </div>
            <img src="/assets/images/money-male.png" alt="idea" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position="right"
        >
          <h3 className="vertical-timeline-element-subtitle">Analyze detailed feedback</h3>
          <p>
            Generate reports of responses to get meaningful insights about what your potential users have to say.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element"
          iconStyle={{ background: '#3B945E', color: '#fff', transform: 'scale(1.3)', marginTop: '10px', boxShadow: '0 0 0 4px #3B945E, inset 0 2px 0 rgba(59,148,94,.08), 0 3px 0 4px rgba(59,148,94,.05)' }}
          position="right"
        >
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="how-bottom-wrapper">
        <div className="how-bottom-header">Greenlight your idea</div>
        <button className="how-bottom-getstarted">Get Started</button>
      </div>
    </div>





    {/* <div className="how-inner-wrapper">

      <div className="how-panel-left">

        <div className="left-panel-content">
          <div className="panel-content-header valign-wrapper">
            Create customizable surveys
            <div className="panel-content-circle-right" />
          </div>
          <div className="panel-content-subheader">
            <span>Build, save, reuse surveys that help you capture the key information you need.</span>
          </div>
        </div>

        <div className="left-panel-content">
          <div className="panel-content-header valign-wrapper">
            Run idea validation experiments
            <div className="panel-content-circle-right" />
          </div>
          <div className="panel-content-subheader valign-wrapper">
            <span>Specify a budget and dates for your research.<br /><br />Survey takers get paid to give you feedback.</span>
            <img src="/assets/images/money-male.png" alt="panel img" />
          </div>
        </div>

      </div>
      <div className="how-panel-divider" />
      <div className="how-panel-right">

        <div className="right-panel-content">
          <div className="panel-content-header valign-wrapper">
            <div className="panel-content-circle-left" />
            Stumble upon an idea
          </div>
          <div className="panel-content-subheader valign-wrapper">
            <img src="/assets/images/lightbulb-male.png" alt="panel img" />
            <span>Maybe it's for a new company, a feature for a product, or just a fun side project.</span>
          </div>
        </div>

        <div className="right-panel-content" style={{margin: '30em 0'}}>
          <div className="panel-content-header valign-wrapper">
            <div className="panel-content-circle-left" />
            Specify your target users
          </div>
          <div className="panel-content-subheader sub-no-image">
            <span>Describe their characteristics (e.g. college students, entrepreneurs, technologists). We’ll make sure your questions go to the right people.</span>
          </div>
        </div>

        <div className="right-panel-content">
          <div className="panel-content-header valign-wrapper">
            <div className="panel-content-circle-left" />
            Analyze detailed feedback
          </div>
          <div className="panel-content-subheader sub-no-image">
            <span>Generate reports of responses to get meaningful insights about what your potential users have to say.</span>
          </div>
        </div>

      </div>

    </div> */}
  </div>
)