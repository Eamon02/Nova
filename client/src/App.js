import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/NavBar/Navbar';
import Landing from './components/layout/Landing/Landing';
import Header from './components/layout/Header/Header';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
