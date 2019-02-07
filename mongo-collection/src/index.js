import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {fetchAllCars} from './actions/CarActions';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';



const store = createStore(allReducers, applyMiddleware(thunk));
store.dispatch(fetchAllCars());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));


