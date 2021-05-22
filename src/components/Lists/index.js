import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import List from './List';

// Import style
import './styles.scss';

const Lists = ({ fetchLists, lists }) => {
  useEffect(() => {
    fetchLists();
  }, []);
  return (
    <div className="lists">
      {lists.map((list) => (
        <List key={list.id} {...list} />
      ))}
    </div>
  );
};

Lists.propTypes = {
  fetchLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

Lists.defaultProps = {
  lists: [],
};

export default Lists;
