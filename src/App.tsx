import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from 'screens/Home';
import NotFound from 'screens/NotFound';

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
