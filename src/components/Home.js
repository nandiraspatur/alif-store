import React, { Component } from 'react';

import ProductList from './ProductList';
import Slide from './Slide';

class Home extends Component {
  render() {
    return (
      <div>
        <Slide />
        <ProductList />
      </div>
    )
  }
};

export default Home;