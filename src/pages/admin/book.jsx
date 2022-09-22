import React from "react";
import axios from "axios";
import Button from "../komponen/button";
import { Link, useNavigate } from "react-router-dom";

export default function Book() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api
  const [page, setPage] = React.useState(100);
  const [perPage, setPerPage] = React.useState(2);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan?kode=22222`);
      console.log("response => ", response.data.data.data);
      setUsers(response.data.data.data);
    } catch (err) {}
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
      <Link to="/book/create">Tambah Buku</Link>
      <table className="table-auto ">
        <thead>
          <tr className="text-left border">
            <th className="pr-2">No</th>
            <th className="pr-2">Judul Buku</th>
            <th className="pr-2">Nama Pengarang</th>
            <th className="pr-2">Nama Penerbit Buku</th>
            <th className="pr-2">Tahun Terbit Buku</th>
            <th className="pr-2">Ketebalan Buku</th>
            <th className="pr-2">Sinopsis</th>
            <th className="pr-2">Cover</th>
            <th className="pr-2">Created At</th>
            <th className="pr-2">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.judul_buku}</td>
                <td>{user.nama_pengarang}</td>
                <td>{user.nama_penerbit_buku}</td>
                <td>{user.tahun_terbit_buku}</td>
                <td>{user.ketebalan_buku}</td>
                <td>{user.sinopsis}</td>
                <td>{user.cover}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
                <td>
                  <Button onClick={()=>{
                    return navigate(`/bookDetail/update/${user.id}`)
                  }}
                  color="blue" title={"Edit"}
                  />
                  <Button color="red" title={"Delete"}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di Page {page}</p>

      <div className="flex items-center justify-center">
        {/* <button
          className="mx-5"
          onClick={() => {
            console.log('running?');
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          className="mx-5"
          onClick={() => {
            console.log('running?');
            setPage(page + 1);
          }}
        >
          Next
        </button> */}
      </div>
    </div>
  );
}