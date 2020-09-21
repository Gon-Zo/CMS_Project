import React from 'react';
import ReactDOM from 'react-dom';
import './assests/styles/app/_index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/utils/fontawesome.util'
import {createStore , applyMiddleware} from "redux";
import {rootReducer} from '../src/assests/modules/reducer'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger , ReduxThunk)))

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
