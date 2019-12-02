import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from '../src/styles/styles';

import Styleguide from '../src/__DEV__/styleguide';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Styleguide />
    </Provider>)
}

export default App;
