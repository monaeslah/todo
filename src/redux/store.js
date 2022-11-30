import {createStore, combineReducers} from "redux";
import * as pages from './pages/reducer.js';





const persistedReducer = combineReducers({
    ...pages
});
const store = createStore(persistedReducer);

export default store;


