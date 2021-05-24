import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import Card from './Card';

// Import style
import './styles.scss';

const List = ({ cards, name, id, removeList, inputCard, onChange, onSubmit, removeCard }) => {
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    evt.target[0].blur(); // Je retire le focus de l'input
    onSubmit(id);
  };
  // Je compte les tâches en cours
  const itemsLeft = cards.filter((card) => card.status === 'in progress').length;

  return (
    <div className="list list-dark">
      <form onSubmit={handlerOnSubmit}>
        <span className="list_input-span">
          <input
            type="text"
            className="list_input input-dark"
            placeholder="Create a new todo..."
            name="inputCard"
            value={inputCard}
            onChange={handlerOnChange}
          />
        </span>
      </form>

      <div className="list_title liste_title-dark">
        <div className="list_title  ">{name}</div>
        <button
          className="list_title-button--remove"
          type="button"
          onClick={() => removeList(id)}
          aria-label="remove-list"
        />
      </div>
      {/* Card */}
      <ul className="list-items">
        {cards.length !== 0 &&
          cards.map((card) => <Card key={card.id} {...card} removeCard={removeCard} />)}
      </ul>
      <div className="list_footer list_footer-dark">
        <div className="list_footer-info">
          <span>{itemsLeft} </span>
          {itemsLeft > 1 ? 'items' : 'item'} left
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
};

List.propTypes = {
  inputCard: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.number,
  removeList: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

List.defaultProps = {
  inputCard: '',
  name: '',
  cards: [],
  id: null,
};

export default List;
