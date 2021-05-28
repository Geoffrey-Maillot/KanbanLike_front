import React from 'react';
import PropTypes from 'prop-types';

// Import react-router
import { useParams } from 'react-router-dom';

// Import Component
import Lists from 'src/containers/Lists';
import Filter from 'src/containers/Filter';

// Import styles
import './styles.scss';

const Content = ({ inputList, onChange, onSubmit, theme }) => {
  // Je récupère la valeurs de ma route paramétrée
  // Je passe cette valeurs à mon composant <List /> pour qu'il filtre sur les listes
  const { filter } = useParams();

  const handlerOnChange = (evt) => {
    onChange(evt.target.name, evt.target.value);
  };
  const handlerOnSubmit = (evt) => {
    evt.target[0].blur();
    evt.preventDefault();
    onSubmit();
  };

  return (
    <div className="content">
      <Lists filter={filter} />
      <span className="content_input-span">
        <form onSubmit={handlerOnSubmit}>
          <input
            type="text"
            className={`content_input input-${theme}`}
            placeholder="Create a new List..."
            value={inputList}
            name="inputList"
            onChange={handlerOnChange}
          />
        </form>
      </span>
      <Filter />
    </div>
  );
};

Content.propTypes = {
  theme: PropTypes.string.isRequired,
  inputList: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Content.defaultProps = {
  inputList: '',
};

export default Content;
