import React from "react";
import { useDispatch } from "react-redux";
import { authForgot } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import Input from "../component/input";
import Button from "../component/button";

export default function Forgot() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState("");

  const [payload, setPayload] = React.useState({
    email: "",
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
  let [messageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tes");
    try {
      const response = await dispatch(authForgot(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        return navigate("*", { replace: true });
      } else {
        setMessageError(response?.response?.data?.msg);
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
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h1 className="text-white text-[30px] text-center font-bold">
          FORGOT PASSWORD
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5">
        <Input
            required
            onChange={handleChange}
            value={payload.email}
            name={"email"}
            type={"email"}
            placeholder="Enter Your Email"
          />
          <p className="text-green-400">{messageError}</p>
          <Button title={isLoading ? "PROCESS" : "VERIFY"} />
        </div>
      </form>
    </div>
  );
}
