import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import List from 'src/containers/List';

// Import style
import './styles.scss';

const Lists = ({
  fetchLists, // Méthode pour récupérer mes listes
  lists, // Tableau de listes
  filter, // Valeur de ma route paramétré pour filtrer les listes ( actice ou completed )
}) => {
  // Je récupère mes listes ici
  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="lists">
      {lists.length !== 0 && lists.map((list) => <List key={list.id} {...list} filter={filter} />)}
    </div>
  );
};

Lists.propTypes = {
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
