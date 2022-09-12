import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false)
    const [users,setUsers] = React.useState({
        username: "",
        name: "",
        jenis_Kelamin: "",
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
            return navigate ('/users')
        }
        catch (err) {
            console.log(err)
        }
    }
    return(
        <div>
            <h1>
                Tambah User
            </h1>
            <form onSubmit={handleSubmit}>
               <div>
                <Input values={users.username} label={'Username'} name={"username"} onChange={handleChange}/>
                <Input values={users.name} label={'Name'} name={"name"} onChange={handleChange}/>
                <Input values={users.email} label={'email'} type="email" name={"email"} onChange={handleChange}/>

                <Input values={users.jenis_kelamin} label={'Jenis kelamin'} name={"jenis_kelamin"} onChange={handleChange}/>
                <Input values={users.password} label={'Password'} name={"password"} onChange={handleChange}/>
                <Input values={users.password_confirmation} label={'Password confirmation'} name={"password_confirmation"} onChange={handleChange}/>
                    <Button title={isLoading ? 'sedang menyimpan' : 'simpan'}/>
               </div>
            </form>
        </div>
    )
}