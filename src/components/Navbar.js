import React, { Component } from 'react';
import FaBars from 'react-icons/lib/io/android-apps'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='row navbar'>
          <div className='container-fluid'>
            <div className='col'>
              <nav className='navbar navbar-light'>
                <a className='navbar-brand' href='/'>
                  <img src='./img/logo.png' className='d-inline-block align-top' alt='logo' />
                </a>
              </nav>
            </div>
            <div className='col navigation'>
              <ul className='nav justify-content-end'>
                <li className='nav-item'>
                  <a className='nav-link active' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#produk'>Produk</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/portofolio'>Portofolio</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/kontak'>Kontak</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/faq'>FAQ</a>
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
                <a className='nav-link active' href='/'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#produk'>Produk</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/portofolio'>Portofolio</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/kontak'>Kontak</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/faq'>FAQ</a>
              </li>
            </ul>
          </div>
        {this.props.children}
      </div>
    )
  }
};

export default Navbar;