import {createStore, applyMiddleware, combineReducer,compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware()));

const combinedReducer = combineReducer({

});

const store = createStore(combinedReducer, enhancer)

export default store;