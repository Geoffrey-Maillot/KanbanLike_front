// Import react
import React, { useEffect } from 'react';

// Import propTypes
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
import Error from 'src/containers/Error';

// Import style
import './styles.scss';

// Component -->
const Todo = ({ logged, theme, cardModalIsOpen, listModalIsOpen, signupIsOpen, rehydrate }) => {
  useEffect(() => {
    rehydrate();
  }, []);
  return (
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
          <Error />
        </Route>
      </Switch>
      {signupIsOpen && <Signup />}
      {cardModalIsOpen && <CardModal />}
      {listModalIsOpen && <ListModal />}
      <SnackBar />
    </div>
  );
};

// PropTypes -->
Todo.propTypes = {
  rehydrate: PropTypes.func.isRequired,
  signupIsOpen: PropTypes.bool.isRequired,
  cardModalIsOpen: PropTypes.bool.isRequired,
  listModalIsOpen: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

// Export -->
export default Todo;
