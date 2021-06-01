/* eslint-disable no-param-reassign */
// Import react
import React, { useState } from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import npm
import { ReactSortable } from 'react-sortablejs';

// Import Component
import Card from 'src/containers/Card';

// Import icons
import { HiOutlinePencil } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';

// Import style
import './styles.scss';

// Component -->
const List = ({
  theme,
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
  filter, // Valeur de ma route paramétré pour filtrer les listes ( actice ou completed )
}) => {
  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value, id);
  };
  const handlerOnSubmit = (evt) => {
    evt.preventDefault();
    evt.target[0].blur(); // Je retire le focus de l'input
    onSubmit(id);
  };

  // je modifie la variable filter...
  // pour qu'elle corresponde aux valeurs de la prorpiété "status" des cards
  if (filter === 'completed') {
    filter = 'done';
  } else if (filter === 'active') {
    filter = 'in progress';
  }
  // si je suis sur une route paramétré, je filtre sur les cards
  if (filter !== '') {
    cards = cards.filter((card) => card.status === filter);
  }

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

  // Méthode qui supprime les tâches terminées
  const clearCompleted = () => {
    cards.forEach((card) => {
      if (card.status === 'done') {
        removeCard(card.id);
      }
    });
  };

  return (
    <div className={`list list-${theme}`} data-list-id={id}>
      <div className={`list_title liste_title-${theme}`}>
        {name}
        <div className="list_title-buttons">
          <button
            className="list_title-button button--remove"
            type="button"
            onClick={() => removeList(id)}
            aria-label="remove-list"
          >
            <VscClose size="1.7em" />
          </button>
          <button
            type="button"
            className="list_title-button button--edit"
            onClick={() => {
              openCloseListModal(id);
            }}
          >
            <HiOutlinePencil size="1.2em" />
          </button>
        </div>
      </div>

      <ReactSortable
        className="list-items"
        tag="ul" // Par default l'élément crée est une div, tag indique quel type d'élément crée.
        list={cards} // Le tableau a injecté dans ReactSortable
        animation={200} // délai de l'animation
        draggable=".container-list-items" // le nom de la classe de l'élément dragable
        group=".list-items" // Le groupe dans lequel l'on peu déplacer les éléments
        onSort={onEndDrag} // Méthode appellé a chaque action
        setList={setListCards} // setList modifie le state avec un nouveau tableau-->
        // -->à chaque déplacement d'une carte
      >
        {/* Card */}
        {cards.length !== 0 && cards.map((card) => <Card key={card.id} {...card} listId={id} />)}
      </ReactSortable>
      <form onSubmit={handlerOnSubmit}>
        <span className="list_input-span">
          <input
            type="text"
            className={`list_input input-${theme}`}
            placeholder="Create a new todo..."
            name="inputCard"
            value={inputCard}
            onChange={handlerOnChange}
          />
        </span>
      </form>

      <div className={`list_footer list_footer-${theme}`}>
        <div className="list_footer-info">
          <span>{itemsLeft} </span>
          {itemsLeft > 1 ? 'items' : 'item'} left
        </div>
        <button className="list_footer-clear" type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

// PropTypes -->
List.propTypes = {
  theme: PropTypes.string.isRequired,
  filter: PropTypes.string,
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
  filter: '',
  name: '',
  cards: [],
  id: null,
};

// Export -->
export default List;
