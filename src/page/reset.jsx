import React from "react";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  let navigate = useNavigate();
  return (
    <div className="bg-blue-500 h-screen w-screen flex flex-col justify-center">
      <form action="" className="space-y-5">
        <h1 className="text-white text-[30px] text-center font-bold">
          RESET PASSWORD
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5">
          <input
            className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold"
            required
            type={"email"}
            placeholder="Enter New Password"
          />

          <button
            onClick={() => {
              return navigate("/Login");
            }}
            className="w-96 p-2 px-3 bg-green-500 border border-green-700 outline-none rounded-lg text-white font-bold text-lg"
          >
            VERIFY
          </button>
        </div>
      </form>
    </div>
  );
}
