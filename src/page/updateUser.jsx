import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button"
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Select from "../komponen/select";

export default function UpdateUser(){
    let navigate = useNavigate();
    let {id} = useParams();
    const [isLoading, setIsLoading] = React.useState(false)
    const [users,setUsers] = React.useState({
        username: "",
        name: "",
        jenis_Kelamin: "laki-laki",
        email: "",
        password: "",
        password_confirmation: "",
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
            const response = await axios.put(`https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`)
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
            const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/$(id)`)
            console.log('response =>',response.data.data);
            const dataUser = response.data.data;
            console.log(dataUser);
            setUsers(()=> {
                return{
                    username: dataUser.username,
                    email: dataUser.email,
                    name: dataUser.name,
                    jenis_Kelamin: dataUser.jenis_Kelamin,
                }
            })
        }
        catch (err){

        }
    }
    React.useEffect(()=> {
        getDetailUser(id)
    },[])

    return(
        <div>
            <h1>
                Update User {id}
            </h1>
            <form onSubmit={handleSubmit}>
               <div>
                <Input values={users.username} label={'Username'} name={"username"} placeholder={"Username"} onChange={handleChange}/>
                <Input values={users.name} label={'Name'} name={"name"}  placeholder={"Name"} onChange={handleChange}/>
                <Input values={users.email} label={'Email'} type="email" name={"email"}  placeholder={"Email"} onChange={handleChange}/>

                <Select
                values={users.jenis_kelamin} label={'Jenis kelamin'} name={"jenis_kelamin"}  placeholder={"Jenis Kelamin"} onChange={handleChange}
                >
                    <option>Pilih</option>
                    <option value={"laki-laki"}>Laki-Laki</option>
                    <option value={"prempuan"}>Prempuan</option>
                </Select>
                    <Button title={isLoading ? 'sedang menyimpan' : 'update'}/>
                     <Link to={'/user'} className='pl-5'>
                       <Button title={'Back to user'}/>
                     </Link>
               </div>
            </form>
        </div>
    )
}