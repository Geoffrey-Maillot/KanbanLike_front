// Import npm
import React from 'react';

// Import component
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Login from 'src/containers/Login';
import Signup from 'src/components/Signup';

// Import style
import './styles.scss';

const Todo = () => (
  <div className="todo todo-dark">
    <Header />
    {/* <Content /> */}
    <Login />
    <Signup />
  </div>
);

export default Todo;
