import React from "react";

const CustomHook = () => {
    let [statusLampu, toggleLampu] = useToggle();
    return (
        <div>
            Lampu saat ini: {statusLampu} <br/>
            <button onClick={(e) => toggleLampu()}>Saklar</button>
        </div>
    );
};

export default CustomHook;

const useToggle = function () {
    const [value, toggle] = React.useState("OFF")
    return [value, toggle];
}