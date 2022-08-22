import React from "react";

export default function Card({ data, setData }) {
    console.log("data adalah", data);
    const handleDelete = (e) => {
        e.preventDefault();
        let filter = data.filter((item)=> {
            return item.id !==parseFloat (e.target.value);
        })
        console.log(filter)
        setData(()=> {
            return filter
        })
        
        console.log('button delete di klik');
    };
    return (
        <React.Fragment>
            <div>
                {data?.map((item, i) => {
                    return (
                        <div>
                            <p>id: {item?.id}</p>
                            <p>Judul: {item.judul}</p>
                            <p>Catatan: {item.catatan}</p>
                            <button value={item?.id} onClick={handleDelete}>Hapus</button>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};