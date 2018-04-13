import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const RootComponent = store => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(RootComponent(store), document.getElementById('root'));
registerServiceWorker();
