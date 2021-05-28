// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import router
import { Route, Switch } from 'react-router-dom';

// Import component
import Header from 'src/containers/Header';
import Content from 'src/containers/Content';
import Login from 'src/containers/Login';
import Signup from 'src/containers/Signup';
import SnackBar from 'src/containers/SnackBar';

// Import style
import './styles.scss';

const Todo = ({ logged, theme }) => (
  <div className={`todo todo-${theme}`}>
    <Header />
    <Switch>
      <Route exact path="/">
        {!logged ? <Login /> : <Content />}
      </Route>
      {logged && (
        <Route path="/filter/:filter">
          <Content />
        </Route>
      )}

      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
    <Signup />
    <SnackBar />
  </div>
);

Todo.propTypes = {
  logged: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Todo;
