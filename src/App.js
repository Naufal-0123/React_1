import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import Book from "./pages/admin/book";
import About from "./pages/admin/about";
import CreateBook from "./pages/admin/bookCreate";
import UpdateBook from "./pages/admin/bookUpdate";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="book" element={<Book />} />
            <Route path="book/create" element={<CreateBook />} />
            <Route path="book/update:id" element={<UpdateBook />} />
            <Route path="about" element={<About />} />
            <Route path='*' element={<Navigate to="/book" replace={true}/>} /> 
          </Route>
      </Routes>
    </React.Fragment>
  );
}
