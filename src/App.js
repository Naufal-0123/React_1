import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtechRouth from "./Router/protechRouth";
import Dashboard from "./Page/Dashboard/dashboard";
import Forgot from "./Page/forgot";
import Login from "./Page/login";
import Register from "./Page/register";
import Reset from "./Page/reset";
import DetailProduk from "./Page/Dashboard/detail";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:id/:token" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/Regi" element={<Reset />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtechRouth>
              <Dashboard />
            </ProtechRouth>
          }
        />
        <Route path='/produk/detailProduk/:uuid' element={
        <ProtechRouth>
          <DetailProduk/>
        </ProtechRouth>
         }/>
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
