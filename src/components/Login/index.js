// Import react
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import './styles.scss';

// Component -->
const Login = ({ email, password, onChange, onSubmit, openSignup, theme }) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  return (
    <div className="login">
      <form className={`login-form login-form-${theme}`} onSubmit={handlerOnSubmit}>
        <h2 className="login-form_title">Connexion</h2>
        <input
          className="login-form_input"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handlerOnChange}
          autoComplete="true"
        />
        <input
          className="login-form_input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          name="password"
          onChange={handlerOnChange}
          autoComplete="true"
        />
        <button
          className={`login-form_button login-form_button-${theme}`}
          type="submit"
          onSubmit={handlerOnSubmit}
        >
          Connexion
        </button>
        <div className="login-form_text">Pas encore inscrit?</div>
        <button
          className={`login-form_button login-form_button-${theme}`}
          type="button"
          onClick={() => openSignup()}
        >
          Inscription
        </button>
      </form>
    </div>
  );
};

// PropTypes -->
Login.propTypes = {
  theme: PropTypes.string.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  openSignup: PropTypes.func.isRequired,
};

Login.defaultProps = {
  email: '',
  password: '',
};

// Export -->
export default Login;
