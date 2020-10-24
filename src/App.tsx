import React from 'react';
import {Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import history from './helpers/history';

import Dashboard from './layout/Dashboard';

import {GlobalStyles} from './styles/global';
import {lightTheme} from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Router history={history}>
        <Dashboard />
      </Router>
    </ThemeProvider>
  );
};

export default App;
