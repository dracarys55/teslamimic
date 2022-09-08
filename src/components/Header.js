import React from 'react';
import logo from '../indexPage/Tesla_Inc.-Wordmark.webp';

const Header = () => {
  return (
    <header>
      <div className='header-right'>
        <a href='/'>
          <img src={logo} alt='/' />
        </a>
      </div>
      <div className='header-mid'>
        <button>Model S</button>
        <button>Model 3</button>
        <button>Model X</button>
        <button>Model Y</button>
        <button>Solar Roof</button>
        <button>Solor Panels</button>
      </div>
      <div className='header-left'>
        <button>Shop</button>
        <button>Account</button>
        <button>Menu</button>
      </div>
    </header>
  );
};

export default Header;
