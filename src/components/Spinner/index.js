import React from 'react';
import './styles.scss';
import spinner from 'src/assets/img/spinner.svg';

const Spinner = () => (
  <div className="spinner">
    <img src={spinner} alt="spinner" />
  </div>
);

export default Spinner;
