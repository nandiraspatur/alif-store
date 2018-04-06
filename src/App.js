import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar>
            <Route exact path='/' component={Home} />
            <Footer />
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
