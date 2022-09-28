import React from "react";
import axios from "axios";
import Button from "../komponen/button";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function User() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api
  const [page, setPage] = React.useState(100);
  const [perPage, setPerPage] = React.useState(2);
  const [isPatchUser, setPatchUser] = React.useState(false)

  const getUserHandle = async () => {
    try {
      setPatchUser(true)
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("response => ", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
      setPerPage(response.data.per_page);
    } catch (err) {
      console.log(err)
    }finally{
      setPatchUser(false)
    }
  };

  const deleteUserHandle = (id) => {
    console.log("button delete berjalan", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
          );
          getUserHandle();
          Swal.fire("Deleted!", "User has been deleted.", "success");
        } catch (error) {
          Swal.fire("Gagal!", "User tidak di temukan", "error");
        }
      }
    });
  };

  console.log("user => ", users);
  console.log("page => ", page);
  console.log("per page => ", perPage);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1>Tabel User</h1>
      <Link to="/user/create">Tambah user</Link>
      <table className="table-auto ">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-5">User Name</th>
            <th className="pr-5">Email</th>
            <th className="pr-5">Jenis Kelamin</th>
            <th className="pr-5">Stored At</th>
            <th className="pr-5">Updated At</th>
            <th className="pr-5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isPatchUser ? (<tr>
            <td colSpan={9}></td>
          </tr>) : users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.stored_at}</td>
                <td>{user.updated_at}</td>
                <td>
                  <Button
                    onClick={() => {
                      return navigate(`/user/update/${user.id}`);
                    }}
                    color="blue"
                    title={"Edit"}
                  />
                  <Button
                    onClick={() => {
                      deleteUserHandle(user.id);
                    }}
                    color="red"
                    title={"Delete"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di Page {page}</p>

      <div className="flex items-center justify-center"></div>
    </div>
  );
}
