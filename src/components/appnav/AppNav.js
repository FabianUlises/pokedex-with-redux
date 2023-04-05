// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import styles from './appnav.css';
const AppNav = () => {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-link'>Home</Link>
    </div>
  );
};

export default AppNav;