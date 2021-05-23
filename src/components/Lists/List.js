import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import Card from './Card';

// Import style
import './styles.scss';

const List = ({ cards, name }) => (
  <div className="list list-dark">
    <span className="list_input-span">
      <input type="text" className="list_input input-dark" placeholder="Create a new todo..." />
    </span>

    <div className="list_title liste_title-dark">
      <div className="list_title  ">{name}</div>
      <button className="list_title-button--remove" type="button" />
    </div>
    {/* Card */}
    <ul className="list-items">
      {cards.length !== 0 && cards.map((card) => <Card key={card.id} {...card} />)}
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

List.propTypes = {
  name: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

List.defaultProps = {
  name: '',
  cards: '',
};

export default List;
