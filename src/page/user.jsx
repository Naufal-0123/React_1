import React from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("response => ", response.data);
      setUsers(response.data);
      setPage(response.data.page);
      setPerPage(response.data.per_page);
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
      <table className="table-auto ">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-5">Nama</th>
            <th className="pr-5">Nama latin</th>
            <th className="pr-5">Jumlah ayat</th>
            <th className="pr-5">Tempat turun</th>
            <th className="pr-5">Arti</th>       
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.nama_latin}</td>
                <td>{user.jumlah_ayat}</td>
                <td>{user.tempat_turun}</td>
                <td>{user.arti}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <p>Saat ini di Page {page}</p> */}

      <div className="flex items-center justify-center">
        {/* <button
          className="mx-10"
          onClick={() => {
            console.log('running?');
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          className="mx-10"
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