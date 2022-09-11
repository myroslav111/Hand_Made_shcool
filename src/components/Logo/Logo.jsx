import { Context } from 'components/App';
import React from 'react';
import { useContext } from 'react';
import './Logo.css';

const Logo = () => {
  const context = useContext(Context);

  return (
    <div className="logo" onClick={context.onLogoClick}>
      Logo
    </div>
  );
};

export default Logo;
