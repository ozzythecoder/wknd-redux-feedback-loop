import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const ratingsPlaceholder = {
  feelings: '',
  understanding: '',
  support: '',
  comments: ''
}

const ratingsObj = (state = ratingsPlaceholder, action) => {
  switch (action.type) {
    case 'UPDATE_RATING':
      return { ...state, [action.payload.id]: action.payload.content }
    case 'CLEAR_FEEDBACK':
      return ratingsPlaceholder;
    default:
      return state;
  }
}

const reduxStore = createStore(
  combineReducers({
    ratingsObj
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={reduxStore}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
