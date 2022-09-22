import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button"
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function UpdateBook(){
    let navigate = useNavigate();
    let {id} = useParams();
    const [isLoading, setIsLoading] = React.useState(false)
    const [users,setUsers] = React.useState({
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit: "",
        sinopsis: "",
        kode_penulis: "",
    })
    const handleChange = (e) => {
        setUsers((users) => {
            return{
                ...users,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(users);
        try{
            setIsLoading(true);
            const response = await axios.put(`https://api-react-2.herokuapp.com/api/perpustakaan/?kode=22222/update/${id}`)
            console.log('response =>', response.data.data.data)
            setIsLoading(false)
            // return navigate ('/users')
        }
        catch (err) {
            console.log(err)
            setIsLoading(false);
            alert("Terjadi Kesalahan");
        }
    }
    const getDetailUser = async(id)=> {
        try{
            const response = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan/?kode=22222/detail/${id}`)
            console.log('response =>',response.data.data.data);
            const dataBook = response.data.data.data;
            console.log(dataBook);
            setUsers(()=> {
                return{
                    judul_buku: "",
                    nama_pengarang: "",
                    nama_penerbit_buku: "",
                    ketebalan_buku: "",
                    tahun_terbit: "",
                    sinopsis: "",
                    kode_penulis: "",
                }
            })
        }
        catch (err){

        }
    }
    React.useEffect(()=> {
        getDetailUser(id)
    },[id])

    return(
        <div>
            <h1>
                Update Buku {id}
            </h1>
            <form onSubmit={handleSubmit}>
               <div>
                <Input values={users.judul_buku} label={'Judul Buku'} name={"judul_buku"} placeholder={"Judul Buku"} onChange={handleChange}/>
                <Input values={users.nama_pengarang} label={'Nama pengarang'} name={"nama_pengarang"}  placeholder={"Nama Pengarang"} onChange={handleChange}/>
                <Input values={users.nama_penerbit_buku} label={'Nama Penerbit buku'} name={"nama_penerbit_buku"}  placeholder={"Nama Penerbit Buku"} onChange={handleChange}/>
                
                <Input values={users.ketebalan_buku} label={'Ketebalan Buku'} name={"ketebalan_buku"}  placeholder={"Ketebalan Buku"} onChange={handleChange}/>
                <Input values={users.tahun_terbit} label={'Tahun Terbit'} name={"tahun_terbit"}  placeholder={"Tahun Terbit"} onChange={handleChange}/>
                <Input values={users.sinopsis} label={'Sinopsis'} name={"sinopsis"}  placeholder={"Sinopsis"} onChange={handleChange}/>
                <Input values={users.kode_penulis} label={'Kode Penulis'} name={"kode_penulis"}  placeholder={"Kode Penulis"} onChange={handleChange}/>
                    <Button title={isLoading ? 'sedang menyimpan' : 'simpan'}/>
                    <Link to={'/login'} className='pl-5'>
                      <Button title={'Back to login'}/>
                    </Link>
               </div>
            </form>
        </div>
    )
}