// Import react
import React from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import Router
import { NavLink } from 'react-router-dom';

// Import styles
import './styles.scss';

// Component -->
const Filter = ({ theme }) => (
  <div className={`list_filter list_filter-${theme}`}>
    <NavLink to="/" exact className="link" activeClassName="link-active">
      All
    </NavLink>
    <NavLink to="/filter/active" exact className="link" activeClassName="link-active">
      Active
    </NavLink>
    <NavLink to="/filter/completed" exact className="link" activeClassName="link-active">
      Completed
    </NavLink>
  </div>
);

// PropTypes -->
Filter.propTypes = {
  theme: PropTypes.string.isRequired,
};

// Export -->
export default Filter;
