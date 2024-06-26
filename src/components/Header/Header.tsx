import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper container">
        <NavLink to="/" className="logo-name">My Blog</NavLink>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="main-nav-item">
              <NavLink to="/" className={`main-nav-link ${({isActive}) => isActive ? 'active' : ''}`}>Home</NavLink>
            </li>
            <li className="main-nav-item">
              <NavLink to="/new-post" className={`main-nav-link ${({isActive}) => isActive ? 'active' : ''}`}>Add</NavLink>
            </li>
            <li className="main-nav-item">
              <NavLink to="/about" className={`main-nav-link ${({isActive}) => isActive ? 'active' : ''}`}>About</NavLink>
            </li>
            <li className="main-nav-item">
              <NavLink to="/contacts" className={`main-nav-link ${({isActive}) => isActive ? 'active' : ''}`}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;