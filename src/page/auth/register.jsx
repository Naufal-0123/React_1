import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import Cookies from "js-cookie";
import { loginProses } from "../../API/auth";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/action/authAction";

export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirmPass, setErrorConfirmPass] = React.useState("");
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    password: "",
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
  let [messageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        return navigate("/artikel", { replace: true });
      } else {
        setMessageError(response?.response?.data?.message);
        setErrorEmail(response?.response?.data?.errors?.email);
        setErrorName(response?.response?.data?.errors?.name);
        setErrorPassword(response?.response?.data?.errors?.password);
        setErrorConfirmPass(
          response?.response?.data?.errors?.password_confirmation
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log("jalan cuy", payload);
  };
  return (
    <>
      <h1>Halaman Regiter</h1>
      <form onSubmit={handleSubmit}>
        <p className="text-red-500">{messageError}</p>
        <Input
          name="name"
          placeholder="Name"
          type={"name"}
          label="name"
          onChange={handleChange}
        />
        <p className="text-red-500">{errorName}</p>
        <Input
          name="email"
          placeholder="Email"
          type={"email"}
          label="email"
          onChange={handleChange}
        />
        <p className="text-red-500">{errorEmail}</p>
        <Input
          name="password"
          placeholder="Password"
          type={"password"}
          label="password"
          onChange={handleChange}
        />
        <p className="text-red-500">{errorPassword}</p>
        <Input
          name="password_confirmation"
          placeholder="Confirm Password"
          type={"confirm_password"}
          label="confirm_password"
          onChange={handleChange}
        />
        <p className="text-red-500">{errorConfirmPass}</p>
        <Button color="blue" title={isLoading ? "Proses" : "Register"} />
        <Link to={"/login"} className="pl-5">
          <Button color="red" title={"Login"} />
        </Link>
      </form>
    </>
  );
}
