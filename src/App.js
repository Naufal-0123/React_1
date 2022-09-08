import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import User from './page/user';
import DetailUser from './page/detailUser';

function App () {

  return(
    <React.Fragment>
      <h1 className='bg-red-500 flex items-center justify-center"' >Belajar API</h1>
     <Routes>
      <Route path='/user' element={<User/>} />
      <Route path='/user/:id/detail' element={<DetailUser/>} />
      <Route path='*' element={<Navigate to="/user" replace={true}/>} /> 
     </Routes>
    </React.Fragment>
  );
}

export default App