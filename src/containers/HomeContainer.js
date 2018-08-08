import React, { Component } from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Banner } from '../components/HomepageBanner/Banner'
import { ProblemSection } from '../components/ProblemSection/ProblemSection'
import { Callout } from '../components/Callout/Callout'
import { HowItWorks } from '../components/HowItWorks/HowItWorks'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="homecontainer-wrapper">
        <div className="homecontainer-bg-left" />
        <div className="homecontainer-bg-right" />
        <div className="nav-banner-wrapper">
          <Navbar />
          <Banner />
        </div>
        <ProblemSection />
        <Callout />
        <HowItWorks />
      </div>
    )
  }
}

export default HomeContainer