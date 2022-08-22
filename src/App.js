import React from 'react';
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import Card from "./komponen/card";
import "./styles/styles.css"

export default function App(){
  const [values, setValues] = React.useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
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
        password:"",
        confirmPassword:"",
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
       <Input isError={errors?.name} textError={"Wajib Diisi"} name="username" value={values.username} label={'Username'} placeHolder="Username" onChange={(event) => {
        event.preventDefault();
        console.log('ok jalan')
        setValues((values)=>{
          return{
           ...values,
           username: event.target.value,
         };
        });
       }} />
       <Input isError={errors?.email} textError={"Wajib Diisi"} name="email" value={values.email} label={'Email'} 
       placeHolder="Email" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.password} textError={"Wajib Diisi"} name="password" value={values.password} label={'Password'} 
       placeHolder="Password" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.confirmPassword} textError={"Wajib Diisi"} name="confirmPassword" value={values.confirmPassword} label={'Confirm Password'} placeHolder="Confirm Password" onBlur={handleBlur} onChange={handleChange}/>
       <Button title={'Simpan'}/>

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

export default App;