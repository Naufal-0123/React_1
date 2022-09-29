import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBook() {
    const { id } = useParams();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isReset, setIsReset] = React.useState(false);
    const [users, setUser] = React.useState({
      kode_penulis: "22222",
      judul_buku: "",
      nama_pengarang: "",
      nama_penerbit_buku: "",
      ketebalan_buku: "",
      tahun_terbit_buku: parseInt(),
      sinopsis: "",
    });
  
    const handleChange = (e) => {
      setUser((users) => {
        return { ...users, [e.target.name]: e.target.value };
      });
      console.log("tes");
    };
    const [errorForm, setErrorForm] = React.useState("");
    const [error, setError] = React.useState({});
    const [errorSin, setErrorSin] = React.useState("");
    const getResetUser = async (id) => {
      try {
        setIsReset(true);
        const response = await axios.get(
          `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=22222`
        );
        const dataUser = response.data.data;
        console.log(dataUser);
        setIsReset(false);
        setUser(() => {
          return {
            kode_penulis: "22222",
            judul_buku: dataUser.judul_buku,
            nama_pengarang: dataUser.nama_pengarang,
            nama_penerbit_buku: dataUser.nama_penerbit_buku,
            ketebalan_buku: dataUser.ketebalan_buku,
            tahun_terbit_buku: dataUser.tahun_terbit_buku,
            sinopsis: dataUser.sinopsis,
          };
        });
      } catch (error) {}
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(users);
      if (users.sinopsis.length <= 10) {
        setErrorSin("Sinopsis harus berisikan minimal 30 karater");
      } else {
        setErrorSin("");
      }
  
      if (
        users.judul_buku === "" ||
        users.ketebalan_buku === "" ||
        users.nama_penerbit_buku === "" ||
        users.nama_pengarang === "" ||
        users.sinopsis.length < 10 ||
        users.tahun_terbit_buku < 2000 ||
        users.tahun_terbit_buku > 2022
      ) {
        setErrorForm("There's Empty Form");
        if (users.ketebalan_buku === "") {
          setError((errors) => {
            return {
              ...errors,
              ketebalan_buku: true,
            };
          });
        }
        if (users.judul_buku === "") {
          setError((errors) => {
            return {
              ...errors,
              judul_buku: true,
            };
          });
        }
        if (users.nama_penerbit_buku === "") {
          setError((errors) => {
            return {
              ...errors,
              nama_penerbit_buku: true,
            };
          });
        }
        if (users.nama_pengarang === "") {
          setError((errors) => {
            return {
              ...errors,
              nama_pengarang: true,
            };
          });
        }
        if (users.sinopsis.length <= 10) {
          setError((errors) => {
            return {
              ...errors,
              sinopsis: true,
            };
          });
        }
        if (users.tahun_terbit_buku < 2000 || users.tahun_terbit_buku > 2022) {
          setError((errors) => {
            return {
              ...errors,
              tahun_terbit_buku: true,
            };
          });
        }
        return;
      }
      try {
        setIsLoading(true);
        const response = await axios.put(
          `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=22222`,
          users
        );
        setIsLoading(false);
        return navigate("/Admin/Books");
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setUser({
          kode_penulis: "22222",
          judul_buku: "",
          nama_pengarang: "",
          nama_penerbit_buku: "",
          ketebalan_buku: "",
          tahun_terbit_buku: "",
          sinopsis: "",
        });
      }
    };
  
    const handleBlur = (e) => {
      if (e.target.value === "")
        setError((errors) => {
          return {
            ...errors,
            [e.target.name]: true,
          };
        });
      else
        setError((errors) => {
          return {
            ...errors,
            [e.target.name]: false,
          };
        });
    };
  
    const getDetailUser = async (id) => {
      try {
        const response = await axios.get(
          `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=22222`
        );
        const dataUser = response.data.data;
        console.log(dataUser);
        setUser(() => {
          return {
            kode_penulis: "22222",
            judul_buku: dataUser.judul_buku,
            nama_pengarang: dataUser.nama_pengarang,
            nama_penerbit_buku: dataUser.nama_penerbit_buku,
            ketebalan_buku: dataUser.ketebalan_buku,
            tahun_terbit_buku: dataUser.tahun_terbit_buku,
            sinopsis: dataUser.sinopsis,
          };
        });
      } catch (error) {}
    };
    React.useEffect(() => {
      getDetailUser(id);
    }, []);
  
    return (
      <React.Fragment>
        <p className="text-center font-bold uppercase">Update Book</p>
        <div className="flex justify-center flex-col">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 w-full h-[510px] py-5"
          >
            <p className="w-full bg-red-600 text-center text-white px-5">
              {errorForm}
            </p>
            <div className="flex flex-row space-between space-x-[45px]">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.nama_pengarang}
                value={users.nama_pengarang}
                label="Name"
                type="text"
                name="nama_pengarang"
                id="name"
                placeholder="Name"
              />
  
              <Input
                onBlur={handleBlur}
                isError={error.nama_penerbit_buku}
                onChange={handleChange}
                value={users.nama_penerbit_buku}
                label="Publisher"
                type="text"
                name="nama_penerbit_buku"
                id="Publisher"
                placeholder="Publisher"
              />
            </div>
            <div>
              <Input
                onBlur={handleBlur}
                isError={error.judul_buku}
                onChange={handleChange}
                value={users.judul_buku}
                label="Book Title"
                type="text"
                name="judul_buku"
                id="Book Title"
                placeholder="Book Title"
              />
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={users.ketebalan_buku}
                onBlur={handleBlur}
                isError={error.ketebalan_buku}
                label="Book Thickness"
                type="text"
                name="ketebalan_buku"
                id="BookThickness"
                placeholder="BookThickness"
              />
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={users.sinopsis}
                onBlur={handleBlur}
                isError={error.sinopsis}
                label="Sinopsis"
                type="text"
                name="sinopsis"
                id="Sinopsis"
                placeholder="Sinopsis"
              />
              <p className="text-white text-[10px] w-full bg-red-600 text-center">
                {errorSin}
              </p>
            </div>
            <div className="flex flex-row space-between space-x-[45px]">
              <Input
                onChange={handleChange}
                value={users.tahun_terbit_buku}
                onBlur={handleBlur}
                isError={error.tahun_terbit_buku}
                label="Year Published"
                type="number"
                name="tahun_terbit_buku"
                id="tahun_terbit_buku"
                placeholder="Year Published"
              />
              <Input
                onChange={handleChange}
                value={users.kode_penulis}
                isError={""}
                label="Author Code"
                type="number"
                name="kode_penulis"
                id="AuthorCode"
                placeholder="AuthorCode"
              />
            </div>
  
            <div className="flex flex-row justify-between">
              <Button
                onClick={() => {
                  return navigate(`/Admin/Books`, {
                    replace: true,
                  });
                }}
                title="Cancel"
              ></Button>
              <Button title={isLoading ? "Submitting" : "Submit"} />
            </div>
          </form>
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                getResetUser(id);
              }}
              title={isReset ? "Reseting" : "Reset"}
            ></Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
