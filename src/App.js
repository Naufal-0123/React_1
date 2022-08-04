import React from 'react';
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import "./styles/styles.css"

export default function App(){
  const [values, setValues] = React.useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleChange = (e) => {
    e.preventDefault()
    console.log('ok gass jalan');
    setValues((values) =>{
      return{
        ...values,
        [e.target.name]: e.target.value
      } 
    });
  };
  return(
    <React.Fragment>
      <div style={{
        display: "flex"
       
      }}>
      <form>
       <Input  name="username" value={values.username} label={'Username'} placeHolder="Username" onChange={(event) => {
        event.preventDefault();
        console.log('ok jalan')
        setValues((values)=>{
          return{
           ...values,
           username: event.target.value,

         };
        });
       }} />
       <Input  name="email" value={values.email} label={'Email'} 
       placeHolder="Email" onChange={handleChange}/>
       <Input  name="password" value={values.password} label={'Password'} 
       placeHolder="Password" onChange={handleChange}/>
       <Input  name="confirmPassword" value={values.confirmPassword} label={'Confirm Password'} placeHolder="Confirm Password" onChange={handleChange}/>
       <Button title={'Simpan'}/>
      </form>
      <div 
      style={{
        width: "40%",
        border: "1px solid black",
        height: "265px",
        }}>
        <p>Username:{values?.username}</p>
        <p>Email: {values?.email}</p>
        <p>Password: {values?.password}</p>
        <p>ConfirmPassword: {values?.confirmPassword}</p>
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