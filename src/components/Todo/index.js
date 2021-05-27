// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import router
import { Route, Switch } from 'react-router-dom';

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
    <Switch>
      <Route exact path="/">
        {!logged ? <Login /> : <Content />}
      </Route>
      <Route path="/filter/:filter">{logged && <Content />}</Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
    <Signup />
  </div>
);

Todo.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Todo;
