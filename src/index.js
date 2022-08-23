// React import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux import
import { Provider } from 'react-redux';
import store from './redux/configStore';

// Package import
import { BrowserRouter } from 'react-router-dom';

// Component & Element import
import App from './App';

// Style import
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
