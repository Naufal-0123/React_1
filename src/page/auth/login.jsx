import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import Cookies from "js-cookie";
import { loginProses } from "../../API/auth";

export default function Login() {
  let navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await loginProses(payload);
      const data = response.data;
      Cookies.set("myapps_token", data?.token);
      return navigate("/user", { replace: true });
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
      </form>
    </>
  );
}
