import React from 'react';

// Import img
import moon from 'src/assets/img/icon-moon.svg';
import sun from 'src/assets/img/icon-sun.svg';

// Import style
import './styles.scss';

const Header = () => (
  <header className="header header-dark">
    <div className="header_content">
      <h1 className="header_content-title">Todo</h1>
      <img classnames="header_content-img" src={sun} alt="sun" />
    </div>
  </header>
);

export default Header;
