import { createStore, combineReducers } from 'redux';
import reposReducer from './reducers/repos';

const rootReducer = combineReducers({
    repos: reposReducer,
});

const store = createStore(rootReducer);

export default store;
