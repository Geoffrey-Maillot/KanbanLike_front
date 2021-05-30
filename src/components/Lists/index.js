import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Import components
import List from 'src/containers/List';

// npm
import { ReactSortable } from 'react-sortablejs';

// Import style
import './styles.scss';

const Lists = ({
  fetchLists, // Méthode pour récupérer mes listes
  lists, // Tableau de listes
  filter, // Valeur de ma route paramétré pour filtrer les listes ( actice ou completed )
  savePositionList, // Méthode qui sauvegarde la nouvelle position de la liste dans la BDD
}) => {
  // Je récupère mes listes ici
  useEffect(() => {
    fetchLists();
  }, []);

  // list réordonné à envoyer à la route patch lists
  const [dragLists, setDragLists] = useState(lists);

  const onEndDrag = () => {
    dragLists.forEach((list, index) => {
      const position = index + 1;
      savePositionList(list.id, position);
    });
  };

  return (
    <ReactSortable
      className="lists"
      draggable=".list"
      handle=".list_title"
      list={lists}
      animation={200}
      onEnd={onEndDrag}
      setList={setDragLists}
    >
      {lists.length !== 0 && lists.map((list) => <List key={list.id} {...list} filter={filter} />)}
    </ReactSortable>
  );
};

Lists.propTypes = {
  savePositionList: PropTypes.func.isRequired,
  fetchLists: PropTypes.func.isRequired,
  filter: PropTypes.string,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

Lists.defaultProps = {
  lists: [],
  filter: '',
};

export default Lists;
