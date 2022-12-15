import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../Redux/action";
import Input from "../component/input";
import Button from "../component/button";
import "../styles/styles.css";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const Swal = require('sweetalert2')
  const [isLoading, setIsLoading] = React.useState(false);
  let [messageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        navigate("/Dashboard", { replace: true });
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: response?.msg,
        });
      } else {
        setErrorEmail(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: response?.response?.data?.msg,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log("jalan cuy");
  };
  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col justx`ify-center">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h1 className="text-white text-[30px] text-center font-bold mt-24">LOGIN</h1>
        <div className="flex flex-col justify-center items-center space-y-5">
          <Input
            onChange={handleChange}
            value={payload.email}
            name={"email"}
            type={"email"}
            placeholder="Enter Your Email"
          />
          <p className="text-red-400">{errorEmail}</p>
          <Input
            onChange={handleChange}
            value={payload.password}
            name={"password"}
            type={"password"}
            placeholder="Enter Your Password"
          />
          <p className="text-red-400">{errorPassword}</p>
          <a
            className="text-green-400 text-lg font-bold hover:text-bold hover:border-b border-spacing-5"
            href="/Forgot"
          >
            Forgot Password ?
          </a>
          <Button
            title={isLoading ? "PROCESS" : "LOGIN"}
          />
           
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-white text-lg font-bold m-2">
            Dont have an account ?
          </p>
          <a
            className="text-green-400 text-lg font-bold hover:text-bold hover:border-b border-spacing-5 m-2"
            href="/Register"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
