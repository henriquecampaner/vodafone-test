import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyles from './styles/global';

import Main from './pages/Main';

import './config/ReactotronConfig';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
