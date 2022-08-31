import React from 'react';
import {Routes, Route, Link, NavLink, Navigate} from 'react-router-dom'
import Home from './Pages/home';
import About from './Pages/about';
import Setting from './Pages/setting';
import Detail from './Pages/detail';
import NotFound from './Pages/notfound';
import Phone from './Pages/setting/phone';
import Profile from './Pages/setting/profile';
import Computer from './Pages/setting/computer';

function App () {
  return(
    <React.Fragment>
      <section className='space-x-5 border py-5'>
        {/* <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/setting"}>Settings</Link> */}
        <NavLink to={"/home"} 
        className={({isActive})=> 
        isActive ? 'text-black border p-2 bg-white-200'
          :undefined
       }>
          Home
        </NavLink>
        <NavLink to={"/about"} 
        className={({isActive})=> 
        isActive ? 'text-black border p-2 bg-white-200'
          :undefined
       }>
          About
        </NavLink>
        <NavLink to={"/setting"} 
       className={({isActive})=> 
        isActive ? 'text-black border p-2 bg-white-200'
          :undefined
       }>
          Setting
        </NavLink>
      </section>

    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
      <Route path='/setting' element={<Setting/>} >
      <Route path='phone' element={<Phone/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='computer' element={<Computer/>} />
      </Route>
      <Route path='/about/:id/:hewan' element={<Detail/>} />
      <Route path='/404' element={<NotFound/>} />
      <Route path='/home' element={<Navigate to="/" replace />} />
      <Route path='*'element={<Navigate to="/404" replace />} />
    </Routes>
    </React.Fragment>
    
  );
}

export default App