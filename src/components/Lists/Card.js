/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import CardModal from 'src/containers/CardModal';

// Import style
import './styles.scss';

const Card = ({ name, id, removeCard, openCloseCardModal }) => (
  <div className="container-list-items container-list-items-dark">
    <button className="list-button--check " type="button" />
    <li className="list-item list-item-dark" onClick={()=> openCloseCardModal()}>{name}</li>
    <button className="list-button--remove" type="button" onClick={() => removeCard(id)} />
    <CardModal cardId={id} />
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  removeCard: PropTypes.func.isRequired,
  openCloseCardModal: PropTypes.func.isRequired,
};

Card.defaultProps = {
  name: '',
  id: null,
};

export default Card;
