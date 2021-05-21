import React, { useState } from 'react';
// == Import semantic-ui
import { Modal } from 'semantic-ui-react';

// Import style
import './styles.scss';

const Signup = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      centered
      style={{ width: '300px', borderRadius: '10px' }}
    >
      <div className="signup-form ">
        <h2 className="signup-form_title">Inscription</h2>
        <input className="signup-form_input" type="text" placeholder="Votre nom" />
        <input className="signup-form_input" type="text" placeholder="Votre prénom" />
        <input className="signup-form_input" type="email" placeholder="Email" />
        <input className="signup-form_input" type="password" placeholder="Mot de passe" />
        <button className="signup-form_button" type="submit">
          Connexion
        </button>
      </div>
    </Modal>
  );
};

export default Signup;
