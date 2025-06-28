import React from 'react';
import logo from '../../assets/img/logo.png'
import {Link } from 'react-router-dom';
import './style.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
    </div>
  );
};

export default Logo;