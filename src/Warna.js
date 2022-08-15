import React from "react";

export default function Warna({warna, setWarna}){
    return(
        <React.Fragment>
            <div style={{backgroundColor: warna, width: 300, height: 300}}>
            <p>{warna}</p>
            </div>
            <button onClick={()=> {
                setWarna("Red")
            }}>
                Merah
            </button>
            <button onClick={()=> {
                setWarna("Yellow")
            }}>
                Kuning
            </button>
            <button onClick={()=> {
                setWarna("Green")
            }}>
                Hijau
            </button>
        </React.Fragment>
    )
}