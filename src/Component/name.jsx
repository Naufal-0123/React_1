import React from "react";
import "../styles/styles.css"
function Button(){
    return(
        <React.Fragment>
            <button style={{
                backgroundColor: 'red',
                color: "white",
                padding: "2px, 2px"
            }} >Simpan</button>
        </React.Fragment>
    );
}

function Input(){
    return(
        <React.Fragment>
            <input className="input" placeholder="input..."/>
        </React.Fragment>
    );
}

export {Button, Input};