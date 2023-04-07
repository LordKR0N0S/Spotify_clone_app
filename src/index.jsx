import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

import ErrorBoundary from './ErrorBoundary';
import { Error } from './components';

const heightError = 'h-full';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <ErrorBoundary fallback={<Error height={heightError} />}>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>,
);
