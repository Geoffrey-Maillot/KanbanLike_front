// == Import : npm
import React from 'react';
import { render } from 'react-dom';
// == Import css from semantic-ui
import 'semantic-ui-css/semantic.min.css';

// == Import react-redux
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import react-router
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import Todo from 'src/containers/Todo';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Router>
    <Provider store={store}>
      <Todo />
    </Provider>
  </Router>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
