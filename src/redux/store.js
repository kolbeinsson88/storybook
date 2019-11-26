import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';

const INITIALIZE_STATE = {}

const store = createStore(
    reducer,
    INITIALIZE_STATE,
    compose(applyMiddleware(...[thunk]))
);

export default store;