import React from 'react';
import PropTypes from 'prop-types';

// Import img
import moon from 'src/assets/img/icon-moon.svg';
import sun from 'src/assets/img/icon-sun.svg';

// Import icons
import { FiLogOut } from 'react-icons/fi';

// Import style
import './styles.scss';

const Header = ({ logged, logout }) => {
  const handlerOnClick = () => {
    logout();
  };
  return (
    <header className="header header-dark">
      <div className="header_content">
        <h1 className="header_content-title">Todo</h1>
        <img classnames="header_content-img" src={sun} alt="sun" />
      </div>
      {logged && (
        <button className="header_logout-button" type="button" onClick={handlerOnClick}>
          <FiLogOut size="1.5em" />
        </button>
      )}
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
