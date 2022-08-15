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
            <p>Ini Card</p>
            {Count}
            <button onClick={handleTambah}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
        </React.Fragment>
    )
}