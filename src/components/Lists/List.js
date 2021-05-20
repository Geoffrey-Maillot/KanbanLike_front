import React from 'react';

// Import Component
import Card from './Card';

// Import style
import './styles.scss';

const List = () => (
  <div className="list list-dark">
    <span className="list_input-span">
      <input type="text" className="list_input input-dark" placeholder="Create a new todo..." />
    </span>

    <div className="list_title liste_title-dark">
      <div className="list_title  ">Complete online Javascript course</div>
      <button className="list_title-button--remove" type="button" />
    </div>
    {/* Card */}
    <ul className="list-items">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
    <div className="list_footer list_footer-dark">
      <div className="list_footer-info">
        <span>5 </span>
        items left
      </div>
      <button className="list_footer-clear" type="button">
        Clear Completed
      </button>
    </div>
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
  </div>
);

export default List;
