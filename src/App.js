import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact to="/" render={(props) => (
              <HomeContainer {...props} />
            )}/>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
