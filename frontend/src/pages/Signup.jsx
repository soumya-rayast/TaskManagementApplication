import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Signup = () => {
    const [Data,setData]= useState({username:"",email:"",password:""})
    const change = (e)=>{
        const {name,value} = e.target;
        setData({...Data,[name]:value})
    }
    const submit = async () =>{
        if(Data.username ==="" || Data.email ==="" || Data.password ===""){
            alert("All Fields are Required")
        }else{
           const response = await axios.post("http://localhost:1000/api/v1/users/sign-in",Data)
           console.log(response)
        }
    }
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-blue-400 rounded'>
                    <div className='text-2xl font-semibold'>SignUp</div>
                    <input
                        type="username"
                        placeholder='username'
                        name='username'
                        onChange={change}
                        value={Data.username}
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded' />
                    <input
                        type="email"
                        placeholder='email'
                        name='email'
                        onChange={change}
                        value={Data.email}
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded'
                        required />
                    <input
                        type="password"
                        placeholder='password'
                        name='password'
                        onChange={change}
                        value={Data.password}
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded' />
                    <div className='w-full flex items-center justify-between'>
                        <button
                            className='bg-white text-xl font-semibold text-black px-3  py-2 rounded hover:text-blue-600 ' 
                            onClick={submit}>
                            SignUp
                        </button>
                        <Link to="/login" className='text-white hover:text-black '>
                        Already having an account? <span className='hover:underline'>Login here</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
