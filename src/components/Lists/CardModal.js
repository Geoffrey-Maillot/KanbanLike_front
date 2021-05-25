import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Modal } from 'semantic-ui-react';

const CardModal = ({
  submitPatchCard,
  onChange,
  inputCardModal,
  isOpen,
  openCloseCardModal,
  cardId,
}) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    submitPatchCard(cardId);
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  return (
    <Modal
      onClose={() => openCloseCardModal()}
      open={isOpen}
      centered
      style={{ width: '300px', borderRadius: '10px' }}
    >
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
    </Modal>
  );
};

CardModal.propTypes = {
  cardId: PropTypes.number.isRequired,
  submitPatchCard: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseCardModal: PropTypes.func.isRequired,
  inputCardModal: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

CardModal.defaultProps = {
  inputCardModal: '',
};

export default CardModal;
