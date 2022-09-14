import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Select from "../komponen/select";

export default function CreateUser(){
    let navigate = useNavigate();
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
            const response = await axios.post('https://belajar-react.smkmadinatulquran.sch.id/api/users/create', users)
            setIsLoading(false)
            console.log(response)
            // return navigate ('/users')
        }
        catch (err) {
            console.log(err)
            setIsLoading(false);
            alert("Terjadi Kesalahan");
        }
    }
    return(
        <div>
            <h1>
                Tambah User
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
                
                <Input values={users.password} label={'Password'} name={"password"}  placeholder={"Password"} onChange={handleChange}/>
                <Input values={users.password_confirmation} label={'Password confirmation'} name={"password_confirmation"}  placeholder={"Confirm Password"} onChange={handleChange}/>
                    <Button title={isLoading ? 'sedang menyimpan' : 'simpan'}/>
                    <Link to={'/user'} className='pl-5'>
                      <Button title={'Back to user'}/>
                    </Link>
               </div>
            </form>
        </div>
    )
}