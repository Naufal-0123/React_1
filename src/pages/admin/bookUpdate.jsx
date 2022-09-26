/* eslint-disable no-unused-vars */
import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function UpdateBook() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState("");
  const [users, setUsers] = React.useState({
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
    kode_penulis: "",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });

    handleBlur(e);
    setFormError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=22222`,
        users
      );
      console.log("response =>", response.data.data.data);
      setIsLoading(false);
      // return navigate ('/users')
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      //   alert("Terjadi Kesalahan");
    }

    if (
      users.judul_buku === "" ||
      users.nama_pengarang === "" ||
      users.nama_penerbit_buku === "" ||
      users.ketebalan_buku === 0 ||
      users.tahun_terbit_buku < 2000 ||
      users.tahun_terbit_buku > 2022 ||
      users.sinopsis.length < 30 ||
      users.kode_penulis === 10101
    ) {
      if (users.judul_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            judul_buku: true,
          };
        });
      }
      if (users.nama_pengarang === "") {
        setErrors((errors) => {
          return {
            ...errors,
            nama_pengarang: true,
          };
        });
      }
      if (users.nama_penerbit_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            nama_penerbit_buku: true,
          };
        });
      }
      if (users.ketebalan_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            ketebalan_buku: true,
          };
        });
      }
      if (users.tahun_terbit_buku < 2020 || users.tahun_terbit_buku > 2022) {
        setErrors((errors) => {
          return {
            ...errors,
            tahun_terbit_buku: true,
          };
        });
      }
      if (users.sinopsis.length < 30) {
        setErrors((errors) => {
          return {
            ...errors,
            sinopsis: true,
          };
        });
      }
      if (users.kode_penulis === 10101) {
        setErrors((errors) => {
          return {
            ...errors,
            kode_penulis: true,
          };
        });
      }
      setFormError("Form wajid diisi");
      return;
    }

    setUsers(() => {
      return {
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: "",
        sinopsis: "",
        kode_penulis: "",
      };
    });
  };
  const getDetailUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=22222`
      );
      console.log("response =>", response.data.data.data);
      const dataBook = response.data.data;
      console.log(dataBook);
      setUsers(() => {
        return {
          judul_buku: dataBook.judul_buku,
          nama_pengarang: dataBook.nama_pengarang,
          nama_penerbit_buku: dataBook.nama_penerbit_buku,
          ketebalan_buku: dataBook.ketebalan_buku,
          tahun_terbit_buku: dataBook.tahun_terbit_buku,
          sinopsis: dataBook.sinopsis,
          kode_penulis: dataBook.kode_penulis,
        };
      });
    } catch (err) {}
  };

  const handleReset = (e) => {
    getDetailUser(id);

    setUsers(() => {
      return {
        judul_buku: users.judul_buku,
        nama_pengarang: users.nama_pengarang,
        nama_penerbit_buku: users.nama_penerbit_buku,
        ketebalan_buku: users.ketebalan_buku,
        tahun_terbit_buku: users.tahun_terbit_buku,
        sinopsis: users.sinopsis,
        kode_penulis: users.kode_penulis,
      };
    });
  };

  const handleBlur = (e) => {
    console.log("handleblur");

    if (e.target.value === "") {
      setErrors(() => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setErrors(() => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };

  React.useEffect(() => {
    getDetailUser(id);
  }, [id]);

  return (
    <div>
      <h1>Update Buku {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.judul_buku}
            label={"Judul Buku"}
            name={"judul_buku"}
            placeholder={"Judul Buku"}
            onChange={handleChange}
          />
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.nama_pengarang}
            label={"Nama pengarang"}
            name={"nama_pengarang"}
            placeholder={"Nama Pengarang"}
            onChange={handleChange}
          />
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.nama_penerbit_buku}
            label={"Nama Penerbit buku"}
            name={"nama_penerbit_buku"}
            placeholder={"Nama Penerbit Buku"}
            onChange={handleChange}
          />

          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.ketebalan_buku}
            label={"Ketebalan Buku"}
            name={"ketebalan_buku"}
            placeholder={"Ketebalan Buku"}
            onChange={handleChange}
          />
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.tahun_terbit_buku}
            label={"Tahun Terbit"}
            name={"tahun_terbit_buku"}
            placeholder={"Tahun Terbit"}
            onChange={handleChange}
          />
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.sinopsis}
            label={"Sinopsis"}
            name={"sinopsis"}
            placeholder={"Sinopsis"}
            onChange={handleChange}
          />
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            value={users.kode_penulis}
            label={"Kode Penulis"}
            name={"kode_penulis"}
            placeholder={"Kode Penulis"}
            onChange={handleChange}
          />
          <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
          <Link to={"/admin/book"} className="pl-5">
            <Button title={"Back to book"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
