/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

// Import style
import './styles.scss';

const Card = () => (
  <div className="container-list-items container-list-items-dark">
    <button className="list-button--check " type="button" />
    <li className="list-item list-item-dark ">Complete online Javascript course</li>
    <button className="list-button--remove" type="button" />
  </div>
);

export default Card;
