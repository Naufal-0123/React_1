import { useState, useEffect } from "react";
import axios from "axios";

function useList() {
  const [alquran, setAlquran] = useState([]);
  const getAlquran = async () => {
    try {
      const response = await axios.get(
        "http://api.alquran.cloud/vl/quran/en.asad"
      );
      console.log("response =>", response);
      setAlquran(response.data?.data?.surah);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAlquran();
  }, []);
  return { alquran };
}

export default useList;
