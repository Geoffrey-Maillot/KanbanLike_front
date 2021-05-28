/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

// Import icons
import { HiOutlinePencil } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';

// Import npm
import classNames from 'classnames';

// Import components
import CardModal from 'src/containers/CardModal';

// Import style
import './styles.scss';

const Card = ({
  name,
  id,
  listId,
  status,
  removeCard,
  openCloseCardModal,
  checkCard,
  theme,
  isOpen,
}) => {
  const handlerClickCheckedButton = () => {
    checkCard(status, id, listId);
  };
  return (
    <div className={`container-list-items container-list-items-${theme}`} data-card-id={id}>
      <button
        className={classNames('list-button--check', {
          'check-completed': status === 'done',
        })}
        type="button"
        onClick={handlerClickCheckedButton}
      />
      <li
        className={classNames(`list-item list-item-${theme}`, {
          'list-completed': status === 'done',
        })}
      >
        {name}
      </li>
      <div className="list_title-buttons">
        <button
          className="list_title-button button--remove"
          type="button"
          onClick={() => removeCard(id)}
          aria-label="remove-list"
        >
          <VscClose size="1.7em" />
        </button>
        <button
          type="button"
          className="list_title-button button--edit"
          onClick={() => {
            openCloseCardModal(id);
          }}
        >
          <HiOutlinePencil size="1.2em" />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.string,
  listId: PropTypes.number,
  removeCard: PropTypes.func.isRequired,
  openCloseCardModal: PropTypes.func.isRequired,
  checkCard: PropTypes.func.isRequired,
};

Card.defaultProps = {
  name: '',
  id: null,
  listId: null,
  status: '',
};

export default Card;
