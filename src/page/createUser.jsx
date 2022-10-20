import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Select from "../komponen/select";
import { createUser } from "../API/user";

export default function CreateUserPage() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  let [errorMessage, setErrorMessage] = React.useState("Lagi Error Cuy");
  const [error, setError] = React.useState({});
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    jenis_Kelamin: "laki-laki",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await createUser(users);
      setIsLoading(false);
      console.log(response);
      // return navigate ('/users')
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.errors);
      setIsLoading(false);
      setErrorMessage("Periksa Inputan Kembali");
    }
  };

  console.log("error be", error);
  return (
    <div>
      <h1>Tambah User</h1>
      <p className="text-red-500">{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            values={users.username}
            label={"Username"}
            name={"username"}
            placeholder={"Username"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.username?.[0]}</p>
          <Input
            values={users.name}
            label={"Name"}
            name={"name"}
            placeholder={"Name"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.name?.[0]}</p>
          <Input
            values={users.email}
            label={"Email"}
            type="email"
            name={"email"}
            placeholder={"Email"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.email?.[0]}</p>
          <Select
            values={users.jenis_kelamin}
            label={"Jenis kelamin"}
            name={"jenis_kelamin"}
            placeholder={"Jenis Kelamin"}
            onChange={handleChange}
          >
            <option>Pilih</option>
            <option value={"laki-laki"}>Laki-Laki</option>
            <option value={"prempuan"}>Prempuan</option>
          </Select>
          <p className="text-red-500">{error?.jenis_Kelamin?.[0]}</p>
          <Input
            values={users.password}
            label={"Password"}
            name={"password"}
            placeholder={"Password"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.password?.[0]}</p>
          <Input
            values={users.password_confirmation}
            label={"Password confirmation"}
            name={"password_confirmation"}
            placeholder={"Confirm Password"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.password_confirmation?.[0]}</p>
          <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
          <Link to={"/user"} className="pl-5">
            <Button color="blue" title={"Back to user"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
