// react component
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';
// other modules

import userData from './user';

const reducers = combineReducers({
	form: formReducer,
	userData
});

/* create store and apply required middleware */
export default createStore(reducers, applyMiddleware(ReduxThunk));
