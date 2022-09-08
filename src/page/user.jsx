import React from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log("response => ", response.data);
      setUsers(response.data.data);
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
      <h1>User who is accepted</h1>
      <table className="table-auto ">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-15">Email</th>
            <th className="pr-5">First Name</th>
            <th className="pr-5">Last Name</th>
            <th className="pr-5">Avatar</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img className="rounded-full h-10 w-10" src={user.avatar} alt={user.avatar} />
                </td>
                <td>Detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di Page {page}</p>

      <div className="flex items-center justify-center">
        <button
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
        </button>
      </div>
    </div>
  );
}