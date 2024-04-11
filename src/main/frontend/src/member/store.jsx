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
//import sessionReducer from './Reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';

// 초기 상태
const initialState = {
    isLoggedIn: false,
    userData: {
        mem_id: null,
        mem_pw: null,
        nickname: null,
    },
};

// 리듀서
/*const rootReducer = combineReducers({
    session: sessionReducer,
});*/


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// 액션 생성자 함수
export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
});

export const logout = () => ({
    type: LOGOUT,
});

// 리듀서
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true,
                userData: action.payload,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                userData: null,
            };
        default:
            return state;
    }
};

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

// 스토어 생성
export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);


export default store;

