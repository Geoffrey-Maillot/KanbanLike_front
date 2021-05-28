import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ListModal = ({ submitPatchList, onChange, inputListModal, openCloseListModal }) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    submitPatchList();
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };

  const handlerOnClickModal = (evt) => {
    if (evt.target.className === 'modal') {
      openCloseListModal();
    }
  };
  return (
    <div className="modal" onClick={handlerOnClickModal}>
      <form className="list-modal-form" onSubmit={handlerOnSubmit}>
        <h2 className="list-modal-form_title">Modifier la liste</h2>
        <input
          className="list-modal-form_input"
          type="text"
          placeholder="Modifier le nom..."
          name="inputListModal"
          value={inputListModal}
          onChange={handlerOnChange}
        />

        <button className="list-modal-form_button" type="submit" onSubmit={handlerOnSubmit}>
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

ListModal.propTypes = {
  submitPatchList: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseListModal: PropTypes.func.isRequired,
  inputListModal: PropTypes.string,
};

ListModal.defaultProps = {
  inputListModal: '',
};

export default ListModal;
