// Import react
import React from 'react';

//Import propType
import PropTypes from 'prop-types';

// Import styles
import './styles.scss';

// Component -->
const Error = ({ theme }) => (
  <div className="error">
    <p className={`error_text error_text-${theme}`}>404</p>
  </div>
);

//PropTypes
Error.propTypes = {
  theme: PropTypes.string.isRequired,
};

// Export -->
export default Error;
