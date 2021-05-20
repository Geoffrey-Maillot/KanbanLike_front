// Import npm
import React from 'react';

// Import component
import Header from 'src/components/Header';
import Content from 'src/components/Content';

// Import style
import './styles.scss';

const Todo = () => (
  <div className="todo todo-dark">
    <Header />
    <Content />
  </div>
);

export default Todo;
