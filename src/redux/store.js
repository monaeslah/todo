import {createStore, combineReducers,applyMiddleware} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import * as pages from './pages/reducer.js';
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'foo',
    storage,
};
const middleware =[thunk]
const persistedReducer = persistReducer(persistConfig, combineReducers({
    ...pages,
   
}));

const store = createStore(persistedReducer,applyMiddleware(...middleware));

let persistor = persistStore(store);
export default store;
export {persistor};


