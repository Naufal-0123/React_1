import React from 'react';
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/styles.css"

export default function App(){
  let[name, setName]= React.useState('');
  let[email, setEmail]= React.useState('');
  let[Password, setPassword]= React.useState('');
  let[confirmPassword, setConfirmPassword]= React.useState('');
 
  return(
    <React.Fragment>
      <form>tes</form>
    </React.Fragment>
  )
}

// function App () {

//   let [count, setCount] = React.useState(0);
//   const handleTambah = ()=>{
//     setCount(count + 1);
//   };
//   const handleKurang = ()=>{
//     setCount(count - 1);
//   };
//   return(
//     <React.Fragment>
//       <h1>count = {count}</h1>
//       <Button onClick={handleTambah} title='Tambah' color="blue"/>
//       <Button disabled={count <= 0 ? true : false} onClick={handleKurang} title='Kurang' color="gray"/>
//       <Button disabled={count === 0 ? true : false} onClick={() => {
//         setCount(0);
//       }}
//       title='Reset'/>
//     </React.Fragment>
//   );
// }

// export default App;