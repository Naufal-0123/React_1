import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createArtikel } from "../../API/artikel";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
export default function CreateArtikel() {
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });

  const handlechange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [submiting, setSubmiting] = React.useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createArtikel(payload);

      alert("berhasil");
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setSubmiting(false);
    }
  };
  console.log("payload", payload);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          name="judul"
          value={payload.judul}
          label="Judul Artikel"
          placeholder="Judul"
          onChange={handlechange}
        />
        <Input
          name="artikel"
          value={payload.artikel}
          label="Isi Artikel"
          placeholder="Artikel"
          onChange={handlechange}
        />
        <Input
          name="thumbnail"
          type={"file"}
          value={payload?.file}
          label="Isi Artikel"
          placeholder="Artikel"
          onChange={(e) => {
            console.log("event", e.target.files[0]);
            let file = e.target.files[0];
            if (file.size > 200000) {
              return alert("ukuran lebih dari 100 kb");
            }
            if (
              file.type === "image/jpeg" ||
              file.type === "image/png" ||
              file.type === "application/pdf"
            ) {
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setPayload((payload) => {
                  return {
                    ...payload,
                    imagePreview: reader.result,
                    thumbnail: file,
                  };
                });
              };
              console.log("code di sini");
            } else {
              return alert("file harus image atau pdf");
            }
          }}
        />
        <img src={payload.imagePreview} alt={payload.imagePreview} className="w-[200px]"/>
        <Button title={"Simpan"} />
        <Link to={"/artikel"} className="pl-5">
          <Button color="blue" title={"Back artikel"} />
        </Link>
      </div>
    </form>
  );
}
