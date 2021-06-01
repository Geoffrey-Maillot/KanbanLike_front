// Import react
import React from 'react';

// Import styles
import './styles.scss';

// Import img
import spinner from 'src/assets/img/spinner.svg';

// Component -->
const Spinner = () => (
  <div className="spinner">
    <img src={spinner} alt="spinner" />
  </div>
);

// Export -->
export default Spinner;
