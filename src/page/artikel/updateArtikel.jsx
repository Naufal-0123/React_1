import React from "react";
import Button from "../../komponen/button";
import { useNavigate, Link, useParams } from "react-router-dom";
import { updateArtikel } from "../../API/artikel";
import { getDetailArtikel } from "../../API/artikel";
import Input from "../../komponen/input";

export default function UpdateArtikel() {
  let navigate = useNavigate();
  let { slug, id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const handleChange = (e) => {
    setPayload(() => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await updateArtikel(id, payload);
      console.log("Berhasil response =>", response)
      setIsLoading(false);
      return navigate("/artikel", { replace: true});
      // return navigate ('/users')
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      //   alert("Terjadi Kesalahan");
    }
  };
  const getArtikel = async () => {
    try {
      const response = await getDetailArtikel(slug, payload);
      console.log("artikel detail =>", response.data.data);
      const dataArtikel = response.data.data;
      setPayload((e) => {
        return {
          judul: dataArtikel.judul,
          slug: dataArtikel.slug,
          thumbnail: dataArtikel.thumbnail,
          id: dataArtikel.id,
          imagePreview: null,
          artikel: dataArtikel.artikel,
          created_at: dataArtikel.created_at,
        };
      });
    } catch (err) {
      console.log("err getartikel =>", err);
    }
  };
  React.useEffect(() => {
    getArtikel(id);
  }, []);

  return (
    <div>
      <h1>Update Artikel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            name="judul"
            value={payload.judul}
            label="Judul Artikel"
            placeholder="Judul"
            onChange={handleChange}
          />
          <Input
            name="artikel"
            value={payload.artikel}
            label="Isi Artikel"
            placeholder="Artikel"
            onChange={handleChange}
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
          <img
            src={payload.imagePreview}
            alt={payload.imagePreview}
            className="w-[200px]"
          />
          <Button title={"Simpan"} />
          <Link to={"/artikel"} className="pl-5">
            <Button color="blue" title={"Back artikel"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
