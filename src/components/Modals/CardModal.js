import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CardModal = ({ submitPatchCard, onChange, inputCardModal, openCloseCardModal }) => {
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
      <form className="card-modal-form" onSubmit={handlerOnSubmit}>
        <h2 className="card-modal-form_title">Modifier la carte</h2>
        <input
          className="card-modal-form_input"
          type="text"
          placeholder="Modifier le nom..."
          name="inputCardModal"
          value={inputCardModal}
          onChange={handlerOnChange}
        />

        <button className="card-modal-form_button" type="submit" onSubmit={handlerOnSubmit}>
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

CardModal.propTypes = {
  submitPatchCard: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseCardModal: PropTypes.func.isRequired,
  inputCardModal: PropTypes.string,
};

CardModal.defaultProps = {
  inputCardModal: '',
};

export default CardModal;
