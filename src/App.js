import React from 'react';
// eslint-disable-next-line no-unused-vars
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import Card from "./komponen/card";
import "./styles/styles.css"

export default function App(){
  const [values, setValues] = React.useState({
    name:"",
    email:"",
    tempatlahir:"",
    tanggallahir: "",
    jeniskelamin: "",
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
        [e.target.name]: false,
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
        name:"",
        email:"",
        tempatlahir:"",
        tanggallahir: "",
        jeniskelamin: "",
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
        onChange={handleChange} onSubmit={handleSubmit}>
       <Input isError={errors?.name} textError={"Wajib Diisi"} name="name" value={values.name} label={'Nama'} placeHolder="Nama" onChange={(event) => {
        event.preventDefault();
        console.log('ok jalan')
        setValues((values)=> {
          return{
           ...values,
           username: event.target.value,
         };
        });
       }} />
       <Input isError={errors?.email} textError={"Wajib Diisi"} name="email" value={values.email} label={'Email'} 
       placeHolder="Email" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.tempatlahir} textError={"Wajib Diisi"} name="tempatlahir" value={values.tempatlahir} label={'Tempat Lahir'} 
       placeHolder="Tempat Lahir" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.tanggallahir} textError={"Wajib Diisi"} type="date" name="tanggallahir" value={values.tanggallahir} label={'Tanggal Lahir'} 
       placeHolder="Tanggal Lahir" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.jeniskelamin} textError={"Wajib Diisi"} name="jeniskelamin" value={values.jeniskelamin} label={'Jenis Kelamin'} 
       placeHolder="Jenis Kelamin" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.password} textError={"Wajib Diisi"} name="password" value={values.password} label={'Password'} 
       placeHolder="Password" onBlur={handleBlur} onChange={handleChange}/>

       <Input isError={errors?.confirmPassword} textError={"Wajib Diisi"} name="confirmPassword" value={values.confirmPassword} label={'Confirm Password'} placeHolder="Confirm Password" onBlur={handleBlur} onChange={handleChange}/>

       <Button title={'Simpan'}/>
       <Button type="reset" title={'Reset'}/>

      </form> 
      <div 
      style={{
        width: "48%",
        border: "1px solid black",
        height: "572",
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
//       <Button disabled={count === 0 ? true : false} onClick={() => {setCount(0);}}title='Reset'/>
//     </React.Fragment>
//   );
// }

// export default App;