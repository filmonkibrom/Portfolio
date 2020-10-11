import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
  <div className='header'>
    
    <div className='options'>
      <Link className='option' to='/'>
        About
      </Link>
      <Link className='option' to='/experiance'>
        Experience
      </Link>
      <Link className='option' to='/skills'>
          Skills
      </Link>
      <Link className='option' to='/contact'>
          Contact Me
      </Link>
    </div>
  </div>
);


export default Header;


