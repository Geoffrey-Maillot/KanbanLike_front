import React, { useState } from 'react';
import PropTypes from 'prop-types';

// drag and drop
import { ReactSortable } from 'react-sortablejs';

// Import Component
import Card from 'src/containers/Card';
import ListModal from 'src/containers/ListModal';

// Import style
import './styles.scss';

const List = ({
  cards,
  name,
  id,
  removeList,
  removeCard,
  inputCard,
  onChange,
  onSubmit,
  openCloseListModal,
  savePositionCard,
}) => {
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

  // J'initialise un état des cards dans la variable listsCards
  // Je passe setListcards à la méthode setList du composant ReactSortable.
  // à chaque déplacement d'une carte setList passera à setListcards un nouveau tableau
  // qui correspond à ma liste de cards réodonnées
  const [listCards, setListCards] = useState(cards);

  // ... A chaque déplacement d'une carte
  // je boucle sur le nouveau tableau de cards
  // onEndDrag est appellé par la méthode onDrag du composant ReactSortable
  // onDrag est appellé chaque fois que mon élément ReactSortable a changé
  // ( après qu'il est changé )
  const onEndDrag = () => {
    listCards.forEach((card, index) => {
      const position = index + 1;
      savePositionCard(id, card.id, position);
    });
  };

  const clearCompleted = () => {
    cards.forEach((card) => {
      if (card.status === 'done') {
        removeCard(card.id);
      }
    });
  };

  return (
    <div className="list list-dark" data-list-id={id}>
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
        <div
          className="list_title"
          onDoubleClick={() => {
            openCloseListModal();
          }}
        >
          {name}
        </div>
        <button
          className="list_title-button--remove"
          type="button"
          onClick={() => removeList(id)}
          aria-label="remove-list"
        />
      </div>
      {/* Card */}

      <ReactSortable
        className="list-items"
        tag="ul"
        list={cards}
        animation={200}
        draggable=".container-list-items"
        group=".list-items"
        onSort={onEndDrag}
        setList={setListCards}
      >
        {cards.length !== 0 && cards.map((card) => <Card key={card.id} {...card} listId={id} />)}
      </ReactSortable>

      <div className="list_footer list_footer-dark">
        <div className="list_footer-info">
          <span>{itemsLeft} </span>
          {itemsLeft > 1 ? 'items' : 'item'} left
        </div>
        <button className="list_footer-clear" type="button" onClick={clearCompleted}>
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
      <ListModal listId={id} />
    </div>
  );
};

List.propTypes = {
  savePositionCard: PropTypes.func.isRequired,
  openCloseListModal: PropTypes.func.isRequired,
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
