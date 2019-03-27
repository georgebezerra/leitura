import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers'
import middleware from './store/middleware'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer,
    compose(
      middleware,
      devTools
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
