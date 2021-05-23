// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import router
import { Router, Switch } from 'react-router-dom';

// Import component
import Header from 'src/components/Header';
import Content from 'src/containers/Content';
import Login from 'src/containers/Login';
import Signup from 'src/containers/Signup';

// Import style
import './styles.scss';

const Todo = ({ logged }) => (
  <div className="todo todo-dark">
    <Header />
    {logged ? <Content /> : <Login />}
    <Signup />
  </div>
);

Todo.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Todo;
