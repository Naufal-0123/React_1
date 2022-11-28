import React, { useState, useEffect } from "react";
import useList from "./hook/useList";
import useJuz from "./hook/useJuz";
function App() {
 const { alquran } = useList();
 const { alquran : data, setJuz, juz } = useJuz(1)
 console.log("alquran", alquran);
  return (
    <React.Fragment>
     <h1>Belajar Custom Hook</h1>
    <h2 className="font-bold">
      {juz}
    </h2>
    <button onClick={() => setJuz((juz) => juz + 1)}>Ubah Juz</button>

    </React.Fragment>
  );
}

export default App;
