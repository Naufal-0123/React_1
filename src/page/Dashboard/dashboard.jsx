import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetailProduct, GetProduct } from "../../API/dashboard";
import Input from "../../component/input";
import Select from "../../component/select";

export default function Dashboard() {
  const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [fetchProduct, setFetchProduct] = React.useState(false);
  let navigate = useNavigate();
  const getProduct = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log("response =>", response);
      console.log("product =>", response.data.data.rows);
      setListProduct(response.data.data.rows);
      // setPayload(response.data.data.rows)
    } catch (err) {
      console.log("err =>", err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProduct();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);

  console.log("listProduct =>", listProduct);
  console.log("payload =>", payload);
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
        <div className="mt-4">
          <input
            type="text"
            name="keyword"
            className="w-[500px] h-[40px] p-3 rounded-md bg-gray-700 border border-gray-700  text-white font-bold outline-none"
            onChange={handleChange}
            value={payload.keyword}
            placeholder="Cari Barang Anda Di Sini"
          />
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <button className="border w-10 h-10 bg-gray-600 rounded-full justify-between m-6 "></button>
          </div>
        </div>
      </header>
      <body className="flex space-x-5">
        <div className="border border-green-500 w-[200px] h-full flex flex-col items-center overflow-auto">
          <select
            className="h-[35px] w-[150px] bg-green-500 text-center text-gray-700 rounded-lg mt-12 outline-none"
            name="kategori"
            // id="select"
            value={payload.kategori}
            onChange={handleChange}

            // value={payload.status}
          >
            <option value={""}>Pilih Kategori</option>
            <option value={"tas"}>Tas</option>
            <option value={"mobil"}>Mobil</option>
            <option value={"motor"}>Motor</option>
            <option value={"televisi"}>Televisi</option>
            <option value={"handphone"}>HandPhone</option>
          </select>

          <input
            type={"number"}
            name="hargaTertinggi"
            placeholder="Harga Tertinggi"
            value={payload.hargaTertinggi}
            onChange={handleChange}
            className="h-[35px] w-[150px] bg-green-500 text-center text-gray-700 rounded-lg mt-5 outline-none"
          />
          
          <input
            type={"number"}
            name="hargaTerendah"
            placeholder="Harga Terendah"
            value={payload.hargaTerendah}
            onChange={handleChange}
            className="h-[35px] w-[150px] bg-green-500 text-center text-gray-700 rounded-lg mt-5 outline-none"
          />
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-5 gap-4">
            {listProduct?.map((item, index) => {
              const convertRupiah = require("rupiah-format");
              let number = item.harga;
              let rupiah = convertRupiah.convert(number);
              const gambar = item.gambarProduk;
              const apa = JSON.parse(gambar);
              return (
                <button
                  onClick={() => {
                    return navigate(`/produk/detailProduk/${item.uuid}`);
                  }}
                >
                  <div className="border border-green-500 w-[200px] h-[250px] mt-2 rounded-lg overflow-hidden">
                    <div className="border-b border-green-500 h-[120px] overflow-hidden">
                      <img class="object-cover" src={apa[0].gambar1} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="text-green-500 font-bold ml-2 mr-2 text-sm truncate">
                        {item.namaProduk}
                      </p>
                    </div>
                    <div className="flex flex-row justify-start">
                      <p className="text-green-500 font-bold ml-2 mt-10 text-sm">
                        {rupiah}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between mt-5">
                      <div className="flex ml-2">
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
                          {item.rating}
                        </p>
                      </div>

                      <p className="text-green-500 font-bold ml-2 mr-2 text-sm">
                        Stok: {item.stok}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </body>
    </div>
  );
}
