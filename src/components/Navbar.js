import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row navbar'>
            <div className='col'>
              <Link className='navbar-brand' to='/'>
                <img src='./img/logo.png' className='d-inline-block align-top' alt='logo' />
              </Link>
            </div>
            <div className='col navigation'>
              <ul className='nav justify-content-end'>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/#produk'>Produk</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/portofolio'>Portofolio</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/kontak'>Kontak</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/faq'>FAQ</Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link icon-bars'>
                    <img src='./img/bar.png' alt='bar' data-toggle="collapse" href="#collapseMenu" role="button" aria-expanded="false" aria-controls="collapseMenu" /> 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse col" id="collapseMenu">
          <ul class="nav flex-column">
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/#produk'>Produk</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/portofolio'>Portofolio</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/kontak'>Kontak</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/faq'>FAQ</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
};

export default Navbar;