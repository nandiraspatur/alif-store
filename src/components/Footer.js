import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookOfficial, FaInstagram, FaTwitterSquare } from 'react-icons/lib/fa';

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
            <ul className='nav justify-content-end social'>
              <li className='nav-item'>
                <a className='nav-link social-link' href='/'><FaFacebookOfficial size={40} /></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link social-link' href='/#produk'><FaInstagram size={40} /></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link social-link' href='/portofolio'><FaTwitterSquare size={40} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;