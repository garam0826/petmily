import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './member/Store'; // 리덕스 스토어
import App from './App';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);