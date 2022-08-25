import React from 'react';
import Button from './component/Button';
import Input from './component/Input';
import TextArea from './component/TextArea';
import Card from './component/Card';
export default function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });
  const [catatan, setCatatan] = React.useState([]);
  const [errors,setErrors] = React.useState([])
  const [formError, setFormError] = React.useState("")
  const handleChange = (e) => {
    console.log('Berhasil');
    setValues(()=> {
      return {
        ...values,
        [e.target.name] : e.target.value,
        id : new Date().getTime(),
        createdAt : new Date()
      };
    });
    setFormError("")
    handleBlur(e)
  };

  const handleBlur = (e) => {
    console.log('handle blur jalan')
    if(e.target.value === '')
    setErrors((errors) => {
      return{
        ...errors,
        [e.target.name]: true
      };
    });
    if(e.target.value !== '')
    setErrors((errors) => {
      return{
        ...errors,
        [e.target.name]: false
      };
    });
  }

  const handleSubmit = (e) => {
    console.log('Submit')
    e.preventDefault()

    if(values.title === "" || values.body === ""){
      setFormError('form wajib diisi')
      if(values.title === ""){
        setErrors((errors)=> {
          return{
            ...errors,
            title : true
          } 
        })
      }
      if(values.body === ""){
        setErrors((errors)=> {
          return{
            ...errors,
            body : true
          } 
        })
      }
      return
    }
    
    setCatatan((catatan) => {
      return[
        ...catatan, values
      ];
    });
    setValues(()=> {
      return{
        id: "",
        title: "",
        body: "",
        archived: false,
        createdAt: "",
      }
    })
    
  };
  
  console.log('values', values)
  console.log('catatan', catatan)
  console.log('error', errors)
  return(
    <div className='w-screen min-h-screen text-gray-500 p-5 space-y-5'>
      <div className='grig grid-cols-5 border-b-2 py-2'>
        <h1 className='text-2xl flex items-center justify-center'>Notes</h1>
        <div className='col-start-5'>
          <Input placeholder="Cari Catatan..."/>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5'>
        <div className='flex items-center justify-center'></div>
        <div className='col-span-1 flex items-center justify-center'>
          <form onSubmit={handleSubmit} className='space-y-2'>
            <p className='flex items-center justify-center text-red-500 text-lg'>{formError}</p>
            <h1 className='text-xl flex items-center justify-center'>Buat Catatan</h1>
            <Input name={"title"} id='title' value={values.title} title={"Judul"} placeholder={"Judul"} onChange={handleChange} onBlur={handleBlur} error={errors.title}/>
            <TextArea name={"body"} id='body' value={values.body} title={"Body"} placeholder={"Catatan"} onChange={handleChange} onBlur={handleBlur} error={errors.body}/>
            <Button title={"Simpan"}/>
          </form>
        </div>

        <div className='col-span-1 overflow-auto w-full px-5 py-3 border h-96'>
          <h1 className='flex items-center justify-center text-xl font-bold '>Daftar Catatan</h1>
         <div className='grid grid-cols-4 gap-5'>
         {
            catatan.length === 0 ? (<div>Tidak Ada Catatan</div>) : catatan.map((item, index)=> {
              return(<div key={index}>
                <Card 
                title={item.title}
                body={item.body}
                id={item.id}
                />
              </div>)
            }) }
         </div>
        </div>
      </div>
    </div>
  );
}