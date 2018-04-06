import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className='row'>
        <div id='produk' className='col-12 product-head'>
          <h2>Produk Percetakan</h2>
        </div>
        <div className='col-12 product-wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
            </div>
            <div className='row'>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
            </div>
            <div className='row'>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
              <div className='col-6 col-md-3 product'>            
                <img className='product-image' src='./img/sample.png' alt='sample' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 product-head'>
          <h2>Promote Percetakan</h2>
        </div>
      </div>
    )
  }
};

export default ProductList;