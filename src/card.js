import React from "react";

export default function Card({Count, setCount}){
    const handleTambah = () => {
        setCount(Count + 1);
    }

    const handleKurang = () => {
        setCount(Count - 1)
    }
    return(
        <React.Fragment>
            <h3>Ini Card</h3>           
            {Count}
            <h3>
                {
                     Count <= 10 ? "Kurang dari Sepuluh" : "Lebih Dari Sepuluh"
                }
            </h3>
            <button onClick={handleTambah}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
        </React.Fragment>
    )
}