import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const Filter = () => (
  <div className="list_filter list_filter-dark">
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

export default Filter;
