import React from "react";
import Button from "./button";

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
                        <div style={{
                            display:'flow'
                        }}>
                            <p>id             : {item?.id}</p>
                            <p>Name           : {item.name}</p>
                            <p>Email          : {item.email}</p>
                            <p>Tempat Lahir   : {item.tempatlahir}</p>
                            <p>Tanggal Lahir  : {item.tanggallahir}</p>
                            <p>Jenis Kelamin  : {item.jeniskelamin}</p>
                            <p>Password       : {item.password}</p>
                            <p>ConfirmPassword: {item.confirmPassword}</p>
                            {/* <button ></button> */}
                            <Button value={item?.id} onClick={handleDelete} title={'Delete'}/>
                            <Button title={'Update'}/>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};