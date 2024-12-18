import React from 'react';
import Navbar from './Navbar';

const Header = ({toggleTheme,theme}) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
    </div>
  )
}

export default Header