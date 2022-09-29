import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Select from "../komponen/select";
import User from "./user";
import { detailUser, updateUser } from "../API/user";

export default function UpdateUser() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    jenis_Kelamin: "laki-laki",
    email: "",
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
      const response = await updateUser(users, id);
      setIsLoading(false);
      return navigate("/user");
      // return navigate ('/users')
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      //   alert("Terjadi Kesalahan");
    }
  };
  const getDetailUser = async (id) => {
    try {
      const response = await detailUser(id);
      console.log("response =>",response.data);
      const dataUser = response.data.data;
      console.log( "data user",dataUser);
      setUsers(() => {
        return {
          username: dataUser.username,
          email: dataUser.email,
          name: dataUser.name,
          jenis_Kelamin: dataUser.jenis_Kelamin,
        };
      });
    } catch (err) {}
  };
  React.useEffect(() => {
    getDetailUser(id);
  }, []);

  return (
    <div>
      <h1>Update User {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            value={users.username}
            label={"Username"}
            name={"username"}
            placeholder={"Username"}
            onChange={handleChange}
          />
          <Input
            value={users.name}
            label={"Name"}
            name={"name"}
            placeholder={"Name"}
            onChange={handleChange}
          />
          <Input
            value={users.email}
            label={"Email"}
            type="email"
            name={"email"}
            placeholder={"Email"}
            onChange={handleChange}
          />

          <Select
            value={users.jenis_kelamin}
            label={"Jenis kelamin"}
            name={"jenis_kelamin"}
            placeholder={"Jenis Kelamin"}
            onChange={handleChange}
          >
            <option>Pilih</option>
            <option value={"laki-laki"}>Laki-Laki</option>
            <option value={"prempuan"}>Prempuan</option>
          </Select>
          <Button title={isLoading ? "sedang menyimpan" : "update"} />
          <Link to={"/user"} className="pl-5">
            <Button title={"Back to user"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
