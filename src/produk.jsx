import React from "react"
function Latihan1({ data }) {
    return (
        <React.Fragment>
            <h1>Data Produk Di Indonesia</h1>
            {data?.map((item, index) => {
                return (
                    <React.Fragment>
                        <div key={index}>
                            <h1>Data Ke {index+ 1}</h1>
                            <h3>Jenis: {item.jenis}</h3>
                            <h3>Produk: {item.produk}</h3>
                        </div>
                        <h2>Tipe</h2>
                        <div>
                            {item?.brand?.map((value, index2) => {
                                return (
                                    <div key={index2}>                               
                                        <p>nama: {value.nama}</p>
                                        <p>harga: {value.harga}</p>
                                    </div>                                   
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })};
        </React.Fragment>
    );
}

export default Latihan1;