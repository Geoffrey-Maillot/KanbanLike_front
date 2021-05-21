import React from 'react';
import PropTypes from 'prop-types';

// Import style
import './styles.scss';

const Login = ({ email, password, onChange, onSubmit }) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  return (
    <div className="login">
      <form className="login-form login-form-dark" onSubmit={handlerOnSubmit}>
        <h2 className="login-form_title">Connexion</h2>
        <input
          className="login-form_input"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handlerOnChange}
        />
        <input
          className="login-form_input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          name="password"
          onChange={handlerOnChange}
        />
        <button className="login-form_button" type="submit" onSubmit={handlerOnSubmit}>
          Connexion
        </button>
        <div className="login-form_text">Pas encore inscrit?</div>
        <button className="login-form_button" type="button">
          Inscription
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {
  email: '',
  password: '',
};

export default Login;
