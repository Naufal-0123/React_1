import React from 'react';
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/styles.css"

function App () {
  return(
    <React.Fragment>
      <h1>Belajar Props2</h1>
     <Layout title={'Nomor 1'}>
      <h1>SMK MADINATUL QURAN</h1>
     </Layout>
     <Layout title={'Nomor 2'}>
      <h1>SMK MADINATUL QURAN</h1>
     </Layout>
     <Layout title={'Nomor 3'}>
      <h1>SMK MADINATUL QURAN</h1>
     </Layout>
     <Button onClick={()=>{
      console.log("button ini di klik");
     }} 
     color="blue"
     title={'simpan'} />
     <Button onClick={()=>{
      console.log("button ini di batalkan");
     }} 
     disable={true}
     title={'batal'} />
     <Button color="green" title={"update"} />
    </React.Fragment>
  );
}

export default App;