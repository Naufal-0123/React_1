/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
function App () {


  let [count, setCount] = React.useState(0);
  let [text, setText] = React.useState(false)
  let [message, setMessage] = React.useState(0);
  let [isloading, setIsloading] = React.useState(true)
  React.useEffect(()=> {
    setMessage(message + 1)
    console.log('useEffect berjalan');
  }, [count, text]);

  React.useEffect(()=> {
    setTimeout(()=> {
      setIsloading(false);
    }, 2000);
  }, []);

  if(isloading){
    return <h1>Apaa...</h1>;
  }

  return(
    <React.Fragment>
      <h1>belajar use Effect</h1>
      <h3>{message === 10 ? "ini baru sepuluh" : "ini bukan sepuluh"}</h3>
      <h1>Message: {message}</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=> {
        setCount(count + 1);
      }}
      >
        Tambah
      </button>
      <button onClick={()=> {
        setText(!text);
      }}>
        Ubah
      </button>
    </React.Fragment>
  );
}

export default App