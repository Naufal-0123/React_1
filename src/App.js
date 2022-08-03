import React from 'react';
import Latihan1 from './produk'

function App () {
  let [produk, setProduk] = React.useState([
    {
    jenis: "Elektronik",
    produk:"Handphone",
    brand: [
      {
        nama: "Samsung",
        harga: "Rp. 1.000.000",
      },
      {
        nama: "Xiomi",
        harga: "Rp. 5.000.000",
      },
    ],
    },
    {
      jenis: "Transpoertasi",
      produk:"Mobil",
      brand: [
        {
          nama: "Toyota",
          harga: "Rp. 1.000.000.000",
        },
        {
          nama: "Honda",
          harga: "Rp. 5.000.000.000",
        },
      ],
      }
  ]);
return (
  <React.Fragment>
    <h1>Latihan 1</h1>
    <Latihan1 data={produk}/>
    
  </React.Fragment>
)
}

export default App