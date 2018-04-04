import React, { Component } from 'react';

import ProductList from './ProductList';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col slide-area'>
            <h1>Slide Promote</h1>
          </div>
        </div>
        <ProductList />
      </div>
    )
  }
}

export default Home;