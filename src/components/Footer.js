import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row footer'>
          <div className='col footer-left'>
            <div className='col'>
              <a className='navbar-brand' href='/'>
                <img src='./img/logo-footer.png' className='d-inline-block align-top' alt='logo' />
              </a>
            </div>
            <div className='col footer-info'>
              <span>
                Alamat No.00, Padalarang, Bandung Barat. <br />
                +6287 829 832 182 <br />
                alif@gmail.com
              </span>
            </div>            
          </div>
          <div className='col footer-right'>
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
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;