import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login() {
  const navigate = useNavigate();
  const handleRegister = () => {
    return navigate("register", { replace: true });
  };
  const handleLogin = () => {
    return navigate("/admin/dashboard", { replace: true });
  };
  return (
    <div className="">
        <h1>
            Login pages
        </h1>
      <div className="space-x-2">
      <button  className="p-2 bg-green-500 text-white rounded-xl" onClick={handleRegister}>Home</button>
      <button  className="p-2 bg-green-500 text-white rounded-xl"onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

