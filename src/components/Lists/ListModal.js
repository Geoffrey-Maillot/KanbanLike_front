import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Modal } from 'semantic-ui-react';

const ListModal = ({
  submitPatchList,
  onChange,
  inputListModal,
  isOpen,
  openCloseListModal,
  listId,
}) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    submitPatchList(listId);
  };
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  return (
    <Modal
      onClose={() => openCloseListModal()}
      open={isOpen}
      centered
      style={{ width: '300px', borderRadius: '10px' }}
    >
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
    </Modal>
  );
};

ListModal.propTypes = {
  listId: PropTypes.number.isRequired,
  submitPatchList: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseListModal: PropTypes.func.isRequired,
  inputListModal: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

ListModal.defaultProps = {
  inputListModal: '',
};

export default ListModal;
