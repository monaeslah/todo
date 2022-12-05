import {createStore, combineReducers,applyMiddleware} from "redux";

import * as pages from './pages/reducer.js';
import thunk from 'redux-thunk'



const middleware =[thunk]
const persistedReducer = combineReducers({
    ...pages
});
const store = createStore(persistedReducer,applyMiddleware(thunk));

export default store;


