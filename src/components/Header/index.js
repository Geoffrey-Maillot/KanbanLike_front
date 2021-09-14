// Import react
import React from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import Router
import { Link } from 'react-router-dom';

// Import img
import moon from 'src/assets/img/icon-moon.svg';
import sun from 'src/assets/img/icon-sun.svg';

// Import icons
import { FiLogOut } from 'react-icons/fi';

// Import style
import './styles.scss';

// Component -->
const Header = ({ logged, logout, theme, changeTheme }) => {
  const handlerOnClick = () => {
    logout();
  };

  // J'initie une variable qui me servira à changer le theme
  let color = '';
  // Méthode qui me permet de changer le theme
  const changeColor = () => {
    theme === 'dark' ? (color = 'light') : (color = 'dark');
    changeTheme(color);
  };
  return (
    <header className="header header-dark">
      <div className="header_content">
        <Link to="/" className="header_content-title">
          Todo
        </Link>
        <button className="header_content-button" type="button" onClick={changeColor}>
          <img classnames="header_content-img" src={theme === 'dark' ? sun : moon} alt="sun" />
        </button>
      </div>
      {logged && (
        <button className="header_logout-button" type="button" onClick={handlerOnClick}>
          <FiLogOut size="1.5em" />
        </button>
      )}
    </header>
  );
};

// PropTypes -->
Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

// Export -->
export default Header;
