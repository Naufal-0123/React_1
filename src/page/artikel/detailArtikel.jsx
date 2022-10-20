import React from "react";
import { getDetailArtikel } from "../../API/artikel";
import { useParams,Link } from "react-router-dom";
import Button from '../../komponen/button';

export default function DetailArtikel() {
  let { slug } = useParams();
  const [artikel, setArtikel] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const getDetailArticle = async () => {
    try {
      const response = await getDetailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setArtikel(() => {
        return {
          judul: dataArtikel.judul,
          thumbnail: dataArtikel.thumbnail,
          artikel: dataArtikel.artikel,
          imagePreview: null,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div>
          <img src={artikel.thumbnail} alt="gambar" className="w-[200px]" />
        </div>
        <div>
          <h1 className="font-bold">Judul</h1>
          <h3>{artikel.judul}</h3>
          <h1 className="mt-10 font-bold">Artikel</h1>
          <p className="mb-10">{artikel.artikel}</p>
          <Link to={'/artikel'}>
            <Button title={'Kembali'}/>
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
}