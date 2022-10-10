import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import User from './page/user';
import DetailUser from './page/detailUser';
import CreateUser from './page/createUser';
import UpdateUser from './page/updateUser';
import Artikel from './page/artikel';
import Login from './page/auth/login';
import ProtechRouth from './routers/protechRoute';
import CreateArtikel from './page/artikel/createArtikel'
import DetailArtikel from './page/artikel/detailArtikel';


function App () {

  return(
    <React.Fragment>
      <h1 className='bg-red-500 flex items-center justify-center"' >Belajar API</h1>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/artikel' element={<ProtechRouth>
        <Artikel/>
      </ProtechRouth>} />
      <Route path='/artikel/createArtikel' element={<ProtechRouth>
        <CreateArtikel/>
      </ProtechRouth>} />
        <Route path='/artikel/detailArtikel/:slug' element={<ProtechRouth>
          <DetailArtikel/>
        </ProtechRouth>}
        />

      <Route path='/user' element={<ProtechRouth>
        <User/>
      </ProtechRouth>} />
      <Route path='/user/:id/detail' element={<ProtechRouth>
        <DetailUser/>
      </ProtechRouth>} />
      <Route path='/user/create' element={<ProtechRouth>
        <CreateUser/>
      </ProtechRouth>} />
      <Route path='/user/update/:id' element={<ProtechRouth>
        <UpdateUser/>
      </ProtechRouth>} />
      <Route path='*' element={<Navigate to="/user" replace={true}/>} /> 
     </Routes>
    </React.Fragment>
  );
}

export default App