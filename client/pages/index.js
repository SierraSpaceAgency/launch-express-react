import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing';
import Example from './example';
import GlobalStyles from '../components/GlobalStyles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/example" component={Example} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
