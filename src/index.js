import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Router from './Routes';

import {
	createStore,
	applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(appReducers);

ReactDOM.render(
	<Provider store={store}>
	  <Router />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
