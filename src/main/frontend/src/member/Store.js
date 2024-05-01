// 스토어 생성 코드
import { legacy_createStore as createStore } from 'redux';
import Reducer from './Reducer';

// 초기 상태를 로컬 스토리지에서 불러오기
const savedState = localStorage.getItem('reduxState');
const initialState = savedState ? JSON.parse(savedState) : {};

// 스토어 생성
const store = createStore(Reducer, initialState);

// 스토어 상태가 변경될 때마다 로컬 스토리지에 상태 저장
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
