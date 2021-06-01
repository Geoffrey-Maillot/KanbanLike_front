// Import react
import React from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import styles
import './styles.scss';

// Component -->
const CardModal = ({ submitPatchCard, onChange, inputCardModal, openCloseCardModal, theme }) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    submitPatchCard();
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };

  const handlerOnClickModal = (evt) => {
    if (evt.target.className === 'modal') {
      openCloseCardModal();
    }
  };
  return (
    <div onClick={handlerOnClickModal} className="modal">
      <form className={`card-modal-form card-modal-form--${theme}`} onSubmit={handlerOnSubmit}>
        <h2 className="card-modal-form_title">Modifier la carte</h2>
        <input
          className={`card-modal-form_input card-modal-form_input-${theme}`}
          type="text"
          placeholder="Modifier le nom..."
          name="inputCardModal"
          value={inputCardModal}
          onChange={handlerOnChange}
          required
        />

        <button className="card-modal-form_button" type="submit" onSubmit={handlerOnSubmit}>
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

// PropTypes -->
CardModal.propTypes = {
  theme: PropTypes.string.isRequired,
  submitPatchCard: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseCardModal: PropTypes.func.isRequired,
  inputCardModal: PropTypes.string,
};

CardModal.defaultProps = {
  inputCardModal: '',
};

// Export -->
export default CardModal;
