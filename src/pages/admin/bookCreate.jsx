/* eslint-disable no-unused-vars */
import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateBook() {
  let navigate = useNavigate();
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
      const response = await axios.post('https://api-react-2.herokuapp.com/api/perpustakaan',users);
      setIsLoading(false);
      console.log(response);
      // return navigate ('/users')
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert("Terjadi Kesalahan");
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
        if (users.kode_penulis === 22222) {
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

  const handleReset = (e) => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            error={errors.judul_buku}
            onBlur={handleBlur}
            values={users.judul_buku}
            label={"Judul Buku"}
            name={"judul_buku"}
            placeholder={"Judul Buku"}
            onChange={handleChange}
          />
          <Input
          error={errors.judul_buku}
          onBlur={handleBlur}
            values={users.nama_pengarang}
            label={"Nama pengarang"}
            name={"nama_pengarang"}
            placeholder={"Nama Pengarang"}
            onChange={handleChange}
          />
          <Input
          error={errors.judul_buku}
          onBlur={handleBlur}
            values={users.nama_penerbit_buku}
            label={"Nama Penerbit buku"}
            name={"nama_penerbit_buku"}
            placeholder={"Nama Penerbit Buku"}
            onChange={handleChange}
          />

          <Input
          error={errors.judul_buku}
          onBlur={handleBlur}
            values={users.ketebalan_buku}
            label={"Ketebalan Buku"}
            name={"ketebalan_buku"}
            placeholder={"Ketebalan Buku"}
            onChange={handleChange}
          />
          <Input
          error={errors.judul_buku}
          onBlur={handleBlur}
            values={users.tahun_terbit_buku}
            label={"Tahun Terbit"}
            name={"tahun_terbit_buku"}
            placeholder={"Tahun Terbit"}
            onChange={handleChange}
          />
          <Input
          error={errors.judul_buku}
            onBlur={handleBlur}
            values={users.sinopsis}
            label={"Sinopsis"}
            name={"sinopsis"}
            placeholder={"Sinopsis"}
            onChange={handleChange}
          />
          <Input
            values={users.kode_penulis}
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
