import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Logo from 'components/Logo/Logo';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export default Header;
