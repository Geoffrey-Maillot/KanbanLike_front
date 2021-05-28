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
import CardModal from 'src/containers/CardModal';
import ListModal from 'src/containers/ListModal';

// Import style
import './styles.scss';

const Todo = ({ logged, theme, cardModalIsOpen, listModalIsOpen, signupIsOpen }) => (
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
    {signupIsOpen && <Signup />}
    {cardModalIsOpen && <CardModal />}
    {listModalIsOpen && <ListModal />}
    <SnackBar />
  </div>
);

Todo.propTypes = {
  signupIsOpen: PropTypes.bool.isRequired,
  cardModalIsOpen: PropTypes.bool.isRequired,
  listModalIsOpen: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Todo;
