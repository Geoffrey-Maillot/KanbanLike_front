import React from 'react';

// Import Component
import Lists from 'src/containers/Lists';

// Import styles
import './styles.scss';

const Content = () => (
  <div className="content">
    <Lists />
    <span className="content_input-span">
      <input type="text" className="content_input input-dark" placeholder="Create a new List..." />
    </span>
  </div>
);

export default Content;
