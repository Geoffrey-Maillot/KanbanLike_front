import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import Lists from 'src/containers/Lists';

// Import styles
import './styles.scss';

const Content = ({ inputList, onChange, onSubmit }) => {
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
      <Lists />
      <span className="content_input-span">
        <form onSubmit={handlerOnSubmit}>
          <input
            type="text"
            className="content_input input-dark"
            placeholder="Create a new List..."
            value={inputList}
            name="inputList"
            onChange={handlerOnChange}
          />
        </form>
      </span>
    </div>
  );
};

Content.propTypes = {
  inputList: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Content.defaultProps = {
  inputList: '',
};

export default Content;
