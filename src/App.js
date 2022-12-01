import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/dashboard';
import Forgot from './page/forgot';
import Login from './page/login';
import Register from './page/register';
import Reset from './page/reset';

function App () {
  return(
    <React.Fragment>
     <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Reset' element={<Reset/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
     </Routes>
    </React.Fragment>
  );
}

export default App