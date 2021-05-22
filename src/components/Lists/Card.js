/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import './styles.scss';

const Card = ({ name }) => (
  <div className="container-list-items container-list-items-dark">
    <button className="list-button--check " type="button" />
    <li className="list-item list-item-dark ">{name}</li>
    <button className="list-button--remove" type="button" />
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
};

Card.defaultProps = {
  name: '',
};

export default Card;
