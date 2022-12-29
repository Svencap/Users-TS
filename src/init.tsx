import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from '../src/Redux/index';
import { BrowserRouter, Routes, Router } from 'react-router-dom';

const init = () => {
  console.log('INIT');
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default init;
