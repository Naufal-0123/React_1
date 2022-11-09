import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import Cookies from "js-cookie";
import { loginProses } from "../../API/auth";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/action/authAction";


export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
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

  const [isLoading, setIsLoading] = React.useState(false)
  let [messageError, setMessageError] = React.useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await dispatch(authLogin(payload));
      console.log('response', response)
      if(response?.status === 'Success'){
        return navigate("/artikel", { replace: true });
      } else {
        setMessageError(response?.response?.data?.message);
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
      <h1>Halaman Login</h1>
      <form onSubmit={handleSubmit}>
      <p className="text-red-500">{messageError}</p>
        <Input
          name="email"
          placeholder="Email"
          type={"email"}
          label="email"
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type={"password"}
          label="password"
          onChange={handleChange}
        />
        <Button
          color="blue"
          title={isLoading ? "Proses" : "Login"}
        />
        <Link to={"/register"} className="pl-5">
            <Button color="red" title={"Register"} />
          </Link>
      </form>
    </>
  );
}
