import React from "react";
import { updateArtikel } from "../../API/artikel";
import { detailArtikel } from "../../API/artikel";
import { createArtikel } from "../../API/artikel";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileResizer from "react-image-file-resizer";
import Button from "../../komponen/button";
import Input from "../../komponen/input";

const UpdateArtikel = () => {
  let navigate = useNavigate();
  let { slug, id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    slug: "",
    judul: "",
    artikel: "",
    thumbnail: "",
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
    } catch (err) {
        console.log("update =>", err);
  
        const response = await detailArtikel(slug, payload);
        const dataArtikel = response.data.data;
        setPayload(() => {
          return {
            judul: payload.judul,
            slug: payload.slug,
            thumbnail: payload.thumbnail,
            imagePreview: null,
            artikel: payload.artikel,
            created_at: payload.created_at,
          };
        });
      } finally {
        setIsLoading(false);
      }
  };
  
};
