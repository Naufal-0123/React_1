import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../Redux/action";
import Input from "../component/input";
import Select from "../component/select";
import Button from "../component/button";
import "../styles/styles.css";

export default function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirmPass, setErrorConfirmPass] = React.useState("");
  const [errorStatus, setErrorStatus] = React.useState("");
  const [errorJenisKelamin, setErrorJenisKelamin] = React.useState("");
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    password: "",
    confimPass: "",
    status: "",
    jenisKelamin: "",
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
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        navigate("/login", { replace: true });
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
        setMessageError(response?.response?.data?.msg);
        setErrorEmail(response?.response?.data?.errors?.email?.msg);
        setErrorName(response?.response?.data?.errors?.name?.msg);
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
        setErrorConfirmPass(
          response?.response?.data?.errors?.confimPass?.msg
        );
        setErrorStatus(
          response?.response?.data?.errors?.status?.msg
        );
        setErrorJenisKelamin(
          response?.response?.data?.errors?.jenisKelamin?.msg
        );
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
          title: response?.response?.data?.error?.email,
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
    <div className="bg-gray-700 h-screen w-screen flex flex-col justify-center">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h1 className="text-white text-[30px] text-center font-bold">
          REGISTER
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5">
          <Input
            onChange={handleChange}
            value={payload.name}
            name={"name"}
            type={"text"}
            placeholder="Enter Your Username"
          />
          <p className="text-red-400">{errorName}</p>
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
          <Input
            onChange={handleChange}
            value={payload.password_confirmation}
            name={"password_confirmation"}
            type={"password"}
            placeholder="Confirm Your Password"
          />
          <p className="text-red-400">{errorConfirmPass}</p>
          <Select
            name="status"
            id="select"
            onChange={handleChange}
            value={payload.status}
          >
            <option value={"Pilih status"}>Pilih Status</option>
            <option value={"active"}>Active</option>
            <option value={"nonactive"}>Non Active</option>
          </Select>
          <p className="text-red-400">{setErrorStatus}</p>
          <Select
            name="jenisKelamin"
            id="select"
            onChange={handleChange}
            value={payload.jenisKelamin}
          >
            <option value={"Pilih kelamin"}>Pilih Kelamin</option>
            <option value={"laki-laki"}>Laki-Laki</option>
            <option value={"perempuan"}>Prempuan</option>
          </Select>
          <p className="text-red-400">{errorJenisKelamin}</p>
          <Button
            title={isLoading ? "PROCESS" : "REGISTER"}
          />
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
