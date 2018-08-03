import React, { Component } from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Banner } from '../components/HomepageBanner/Banner'

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
                <Navbar />
                <Banner />
            </div>
        )
    }
}

export default HomeContainer