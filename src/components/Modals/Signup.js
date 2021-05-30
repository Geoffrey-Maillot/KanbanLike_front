import React from 'react';
import PropTypes from 'prop-types';

// Import style
import './styles.scss';

const Signup = ({
  firstName,
  lastName,
  email,
  password,
  onChange,
  onSubmit,
  openCloseSignup,
  theme,
}) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  const handlerOnClickModal = (evt) => {
    if (evt.target.className === 'modal') {
      openCloseSignup();
    }
  };

  return (
    <div onClick={handlerOnClickModal} className="modal">
      <form className={`signup-form signup-form--${theme}`} onSubmit={handlerOnSubmit}>
        <h2 className="signup-form_title">Inscription</h2>
        <input
          className="signup-form_input"
          type="text"
          placeholder="Votre nom"
          name="lastName"
          value={lastName}
          onChange={handlerOnChange}
        />
        <input
          className="signup-form_input"
          type="text"
          placeholder="Votre prénom"
          name="firstName"
          value={firstName}
          onChange={handlerOnChange}
        />
        <input
          className="signup-form_input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handlerOnChange}
        />
        <input
          className="signup-form_input"
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={handlerOnChange}
        />
        <button
          className={`signup-form_button signup-form_button--${theme}`}
          type="submit"
          onSubmit={handlerOnSubmit}
        >
          Connexion
        </button>
      </form>
    </div>
  );
};

Signup.propTypes = {
  theme: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  openCloseSignup: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default Signup;
