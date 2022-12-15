import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetailProduct } from "../../API/dashboard";

export default function DetailProduk() {
  let navigate = useNavigate();
  const [gambarProduk, setGambarProduk] = React.useState()
  let { uuid } = useParams();
  const convertRupiah = require("rupiah-format");
//   let number = payload.harga;
  const [payload, setPayload] = React.useState({
    gambarProduk: "",
    namaProduk: "",
    rating: "",
    harga: "",
    stok: "",
    Kategori: "",
    deskripsi: "",
  });
  const getDetailProduk = async () => {
    try {
      
      const response = await GetDetailProduct(uuid);
      const dataProduk = response.data.data;
      console.log("dataProduk =>", dataProduk);
      setPayload(() => {
        return {
          gambarProduk: dataProduk.gambarProduk,
          namaProduk: dataProduk.namaProduk,
          rating: dataProduk.rating,
          harga: dataProduk.harga,
          stok: dataProduk.stok,
          Kategori: dataProduk.kategori,
          deskripsi: dataProduk.deskripsi,
        };
    });
    const json = response.data.data.gambarProduk;
    const obj = JSON.parse(json)
    setGambarProduk(obj)
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailProduk();
  }, []);
  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col overflow-auto overflow-x-hidden">
      <header className="bg-green-500 w-screen h-16 flex justify-between rounded-br-lg">
        <div className="flex p-3 ml-12 justify-between">
          <div className="">
            <p className="text-white text-center text-lg font-bold my-1">
              D-Store
            </p>
          </div>
        </div>
        {/* <div className="mt-4">
         
        </div> */}
        <div className="flex items-center space-x-3">
          <div>
            <button className="border w-10 h-10 bg-gray-600 rounded-full justify-between m-6 "></button>
          </div>
        </div>
      </header>
      <div className="mt-5 ml-5 flex space-x-5">
        <div className="border-green-500 border w-[500px] h-[400px] rounded-lg overflow-hidden">
          <img  className="h-full w-full object-cover" src={gambarProduk[0].gambar1} alt="gambar"/>
        </div>

        <div>
          <h1 className="font-bold text-2xl text-green-500">
            {payload.namaProduk}
          </h1>
          <h1 className="font-sans text-lg text-green-500">{convertRupiah.convert(payload.harga)}</h1>

          <div className="flex ml-2 mt-3 justify-start">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="text-green-500 font-bold ml-1 text-sm">
              {payload.rating}
            </p>
          </div>

          <h1 className="mt-5 mb-4 font-bold  text-green-500">DESKRIPSI :</h1>
          <h1 className="whitespace-normal w-[780px] font-sans  text-green-500">
            {payload.deskripsi}
          </h1>
          <h1 className="mt- mb-1 font-bold text-md text-start text-green-500">
            kategori : {payload.Kategori}
          </h1>

         
          <div className="space-x-5 mt-10">
            <button className="border-2 w-[150px] h-[30px] bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold text-lg">
              Buy
            </button>
            <button className="border-2 w-[150px] h-[30px] bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold text-lg">
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
