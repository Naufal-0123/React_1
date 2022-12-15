import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authReset } from "../Redux/action";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../component/input";
import Button from "../component/button";

export default function Reset() {
  let { id, token } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorPassword, setErrorPassword] = React.useState("");
  const [payload, setPayload] = useState({
    passwordBaru: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authReset(id, token, payload));
      console.log("response", response);
      if (response?.status === "Success") {
        return navigate("/Login", { replace: true });
      } else {
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log("jalan cuy");
  };

  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="space-y-5">
        <h1 className="text-white text-[30px] text-center font-bold">
          RESET PASSWORD
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5">
          <Input
            value={payload.password}
            name="passwordBaru"
            onChange={handleChange}
            type={"password"}
            placeholder="Enter New Password"
          />
          <p className="text-green-400">{errorPassword}</p>
          <Input
            required
            onChange={handleChange}
            value={payload.password_confirmation}
            name={"password_confirmation"}
            type={"password"}
            placeholder="Confirm Your Password"
          />
          <p className="text-green-400">{errorPassword}</p>
          <Button title={isLoading ? "PROCESS" : "RESET"} />
        </div>
      </form>
    </div>
  );
}
