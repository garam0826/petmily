/*
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
        백엔드에서 가져온 데이터입니다 : {hello}
      </div>
  );
}

export default App;
*/
/*import {RouterProvider} from "react-router-dom";
import root from './root';
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import store from './member/store';

const persistor = persistStore(store);

function App(){
    return(
        //<RouterProvider router={root}/>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={root}/>
            </PersistGate>
        </Provider>
    );
}

export  default App;*/

/*import React from 'react';
import { RouterProvider } from 'react-router-dom'; // BrowserRouter를 사용합니다.
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import store, { persistor } from './member/store'; // Redux 스토어와 persistor를 가져옵니다.
import {store} from "./member/store";
import root from "./root";
import {persistStore} from "redux-persist";

const persistor = persistStore(store);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={root}/>
            </PersistGate>
        </Provider>
    );
}
//<PersistGate loading={null} persistor={persistor}>
export default App;
*/

import React from 'react';
import { RouterProvider } from 'react-router-dom'; // BrowserRouter를 사용합니다.
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import store, { persistor } from './member/store'; // Redux 스토어와 persistor를 가져옵니다.
import {store} from "./member/store";
import root from "./root";
import {persistStore} from "redux-persist";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={root}/>
        </Provider>
    );
}
//<PersistGate loading={null} persistor={persistor}>
export default App;
