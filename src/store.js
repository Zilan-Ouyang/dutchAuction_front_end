import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middelWare = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middelWare),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;