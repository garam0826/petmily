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
import {RouterProvider} from "react-router-dom";
import root from './root';

function App(){
    return(
        <RouterProvider router={root}/>
    );
}

export  default App;
