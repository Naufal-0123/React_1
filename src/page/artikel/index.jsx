import React from "react";
import Button from "../../komponen/button";
import { Link, useNavigate } from "react-router-dom";
import { getAllArtikel } from "../../API/artikel";
import { deleteArtikel } from "../../API/artikel";

export default function Artikel() {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [isFetchArtikel, setIsFetchArtikel] = React.useState(false);
  const navigate = useNavigate();
  const getListArtikelHandle = async () => {
    try {
      setIsFetchArtikel(true);
      const response = await getAllArtikel();
      console.log("response =>", response.data);
      console.log("jalan lagi cuy");
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchArtikel(false);
    }
  };

  console.log(listArtikel);
  React.useEffect(() => {
    getListArtikelHandle();
  }, []);
  return (
    <div>
      <Link to="/artikel/createArtikel">
        <Button title={"Add Artikel"} color="blue"/>
      </Link>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Artikel</th>
            <th>Penulis</th>
            <th>Dibuat</th>
            <th>Diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchArtikel ? (
            <tr>
              <td colSpan={9}>loading</td>
            </tr>
          ) : (
            listArtikel.map((artikel, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>
                  <td>
                    <img src={artikel?.thumbnail} className="w-10 h-10" />
                  </td>
                  <td className="-indent-8 break-all">
                    {artikel?.artikel}
                  </td>
                  <td>{artikel?.user?.name}</td>
                  <td>{artikel.created_at}</td>
                  <td>{artikel.updated_at}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => {
                        return navigate(
                          `/artikel/update/${artikel.id}/${artikel.slug}`
                        );
                      }}
                      color="blue"
                      title={"Edit"}
                    />
                    <Button
                      onClick={() => {
                       return navigate(`/artikel/detailArtikel/${artikel.slug}`)
                      }}
                      color="green"
                      title={"Detail"}
                    />
                    <Button
                      onClick={() => {
                        console.log("delete jalan");
                      }}
                      color="red"
                      title={"Delete"}
                    />
                     
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
