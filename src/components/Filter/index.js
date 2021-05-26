import React from 'react';
import './styles.scss';

const Filter = () => (
  <div className="list_filter list_filter-dark">
    <button className="list_footer-all" type="button">
      All
    </button>
    <button className="list_footer-Active" type="button">
      Active
    </button>
    <button className="list_footer-Completed" type="button">
      Completed
    </button>
  </div>
);

export default Filter;
