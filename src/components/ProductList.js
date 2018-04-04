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
              <div className='col product'>
              a
              </div>
              <div className='col product'>
              b
              </div>
              <div className='col product'>            
              c
              </div>
              <div className='col product'>            
              d
              </div>
            </div>
            <div className='row'>
              <div className='col product'>
              a
              </div>
              <div className='col product'>
              b
              </div>
              <div className='col product'>            
              c
              </div>
              <div className='col product'>            
              d
              </div>
            </div>
            <div className='row'>
              <div className='col product'>
              a
              </div>
              <div className='col product'>
              b
              </div>
              <div className='col product'>            
              c
              </div>
              <div className='col product'>            
              d
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