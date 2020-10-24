import React, {createElement, Suspense} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import history from './helpers/history';

import Dashboard from './layout/Dashboard';
import routes from './routes';

import Loading from './components/Loading';

import {GlobalStyles} from './styles/global';
import {lightTheme} from './styles/theme';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              render={(props) => (
                <Dashboard>{createElement(route.component, props)}</Dashboard>
              )}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
