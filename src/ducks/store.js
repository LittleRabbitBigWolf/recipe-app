import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from "./userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware()));

const combinedReducer = combineReducers({
  user: userReducer
});

const store = createStore(combinedReducer, enhancer)

export default store;