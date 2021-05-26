/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import CardModal from 'src/containers/CardModal';

// Import style
import './styles.scss';

const Card = ({ name, id, listId, status, removeCard, openCloseCardModal, checkCard }) => {
  const handlerClickCheckedButton = () => {
    checkCard(status, id, listId);
  };
  return (
    <div className="container-list-items container-list-items-dark" data-card-id={id}>
      <button
        className={classNames('list-button--check', {
          'check-completed': status === 'done',
        })}
        type="button"
        onClick={handlerClickCheckedButton}
      />
      <li
        className={classNames('list-item list-item-dark', {
          'list-completed': status === 'done',
        })}
        onDoubleClick={() => openCloseCardModal(id)}
      >
        {name}
      </li>
      <button className="list-button--remove" type="button" onClick={() => removeCard(id)} />
      <CardModal />
    </div>
  );
};

Card.propTypes = {
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
