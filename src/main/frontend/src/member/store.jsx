/*
import {createStore, combineReducers, applyMiddleware} from 'redux';
import sessionReducer from './Reducer';
import {persistStore, persistReducer}  from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 루트 리듀서
const rootReducer = combineReducers({
    session: sessionReducer,
});

// 스토어 생성
//const store = createStore(rootReducer);

const persistConfig = {
    key: "root",
    storage,
};

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    /!*persistedReducer,
    composeEnhancers(applyMiddleware())*!/
});
//const store = createStore(persistedReducer, applyMiddleware(thunk));
//const persistor = persistStore(store);

export default store;
*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './Reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// 초기 상태
/*const initialState = {
    isLoggedIn: false,
    userData: null,
};*/

// 리듀서
const rootReducer = combineReducers({
    session: sessionReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 생성
export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export default store;

