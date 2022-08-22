import React from 'react';
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import Card from "./komponen/card";
import "./styles/styles.css"

export default function App(){
  const [values, setValues] = React.useState({
    judul:"",
    catatan:"",
  });

  const [data, setData] = React.useState([
  ]);
  const [errors, setError] =React.useState([
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log('ok gass jalan');
    setValues((values)=> {
      return{
        ...values,
        [e.target.name]: e.target.value
      } 
    });
    if(e.target.value !== ""){
      setError({
        ...errors,
        [e.target.name]: true,
      });
    }
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if(e.target.value === ""){
      setError((errors)=> {
        return{
          ...errors,
          [e.target.name]: true,
        } 
      });
    } 
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('form tersubmit');
    
    values.id = new Date().getTime()
    setData((data)=> {
      return[...data, values];  
    });

    setValues((values)=> {
      return{
        username:"",
        email:"",
      }
    });
  };
  console.log('errors', errors)
  return (
    <React.Fragment>
      <div style={{
        display: "flex"
      }}>
      <form
      onSubmit={handleSubmit}>
       <Input isError={errors?.name} textError={"Wajib Diisi"} name="judul" value={values.username} label={'Judul'} placeHolder="Judul" onChange={(event) => {
        event.preventDefault();
        console.log('ok jalan')
        setValues((values)=>{
          return{
           ...values,
           username: event.target.value,
         };
        });
       }} />
       <Input isError={errors?.name} textError={"Wajib Diisi"} type="text" name="catatan" value={values.catatan} label={'Catatan'} placeHolder="Catatan" onChange={(event) => {
        event.preventDefault();
        console.log('ok jalan')
        setValues((values)=>{
          return{
           ...values,
           username: event.target.value,
         };
        });
       }} />
      </form>
      <div 
      style={{
        width: "40%",
        border: "1px solid black",
        height: "265px",
        }}>
        <Card data={data} setData={setData}/>
      </div>
      </div>
    </React.Fragment>
  );
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