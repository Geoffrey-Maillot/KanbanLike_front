import React from 'react';
import PropTypes from 'prop-types';

// Import styless
import './styles.scss';

import { NavLink } from 'react-router-dom';

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

Filter.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Filter;
