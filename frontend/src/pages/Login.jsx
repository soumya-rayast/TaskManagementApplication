import React, { useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { login } from "../store/auth"
import { useDispatch, useSelector } from "react-redux"
const Login = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [Data, setData] = useState({ username: "", password: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    }
    const submit = async () => {
        try {
            if (Data.username === "" || Data.password === "") {
                alert("All fields are required");
            } else {
                const response = await axios.post(
                    "http://localhost:1000/api/v1/users/log-in", Data
                )
                setData({ username: "", password: "" })
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("token", response.data.token);
                dispatch(login())
                navigate("/")
            }
        } catch (error) {
            alert(error.response.message);
        }
    }
    if (isLoggedIn) {
        return < Navigate to='/' />
    }
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-blue-400 rounded'>
                    <div className='text-2xl font-semibold'>LogIn</div>
                    <input
                        type="username"
                        placeholder='username'
                        name='username'
                        onChange={change}
                        value={Data.username}
                        className='bg-white-700 px-3 py-2 my-3 w-full  text-black rounded' />
                    <input
                        type="password"
                        placeholder='password'
                        name='password'
                        onChange={change}
                        value={Data.password}
                        className='bg-white-700 px-3 py-2 my-3 w-full text-black rounded' />
                    <div className='w-full flex items-center justify-between'>
                        <button
                            className='bg-white text-xl font-semibold text-black px-3  py-2 rounded hover:text-blue-600 '
                            onClick={submit}>
                            LogIn
                        </button>
                        <Link to="/sign-in" className='text-white hover:text-black '>Not having an account ? <span className='hover:underline'>SignUp here</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
