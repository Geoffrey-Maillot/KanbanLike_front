// Import react
import React from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import styles
import './styles.scss';

// Component -->
const ListModal = ({
  submitPatchList,
  onChange,
  inputListModal,
  openCloseListModal,
  theme,
  listId,
}) => {
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    submitPatchList(listId);
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
      <form
        className={`list-modal-form list-modal-form--${theme}`}
        onSubmit={handlerOnSubmit}
      >
        <h2 className="list-modal-form_title">Modifier la liste</h2>
        <input
          className={`list-modal-form_input list-modal-form_input--${theme}`}
          type="text"
          placeholder="Modifier le nom..."
          name="inputListModal"
          value={inputListModal}
          onChange={handlerOnChange}
          required
        />

        <button
          className="list-modal-form_button"
          type="submit"
          onSubmit={handlerOnSubmit}
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

// PropTypes -->
ListModal.propTypes = {
  theme: PropTypes.string.isRequired,
  submitPatchList: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  openCloseListModal: PropTypes.func.isRequired,
  inputListModal: PropTypes.string,
  listId: PropTypes.number.isRequired,
};

ListModal.defaultProps = {
  inputListModal: '',
};

// Export -->
export default ListModal;
