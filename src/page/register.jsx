import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

export default function Register() {
  let navigate = useNavigate();
  return (
    <div className="bg-blue-500 h-screen w-screen flex flex-col justify-center">
      <form action="" className="space-y-5">
        <h1 className="text-white text-[30px] text-center font-bold">
          REGISTER
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5">
          <input
            className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold"
            required
            type={"text"}
            placeholder="Enter Your Username"
          />
          <input
            className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold"
            required
            type={"email"}
            placeholder="Enter Your Email"
          />
          <input
            className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold"
            required
            type={"password"}
            placeholder="Enter Your Password"
          />
          <input
            className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold"
            required
            type={"text"}
            placeholder="Enter Your Gender"
          />
          <button
            onClick={() => {
              return navigate("/Dashboard");
            }}
            className="w-96 p-2 px-3 bg-green-500 border border-green-700 outline-none rounded-lg text-white font-bold text-lg"
          >
            REGISTER
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-white text-lg font-bold m-2">Have an account ?</p>
          <a
            className="text-green-400 text-lg font-bold hover:text-bold hover:border-b border-spacing-5 m-2"
            href="/Login"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}
