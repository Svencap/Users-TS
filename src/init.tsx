import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const init = () => {
  console.log('INIT');
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
export default init;