import React, {createElement, Suspense} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {QueryCache, ReactQueryCacheProvider} from 'react-query';

import history from './helpers/history';

import Dashboard from './layout/Dashboard';
import routes from './routes';

import LoadingPage from './scenes/Loading';

import {GlobalStyles} from './styles/global';
import {lightTheme} from './styles/theme';

const queryCache = new QueryCache();

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage />}>
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
  </ReactQueryCacheProvider>
);

export default App;
