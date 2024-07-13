import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Signup = () => {
    const [Data, setData] = useState({ username: "", email: "", password: "" })
    const history = useNavigate();
    // const [error, setError] = useState("")
    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value })
    }
    const submit = async () => {
        try {
            if (Data.message === "" || Data.email === "" || Data.password === ""){
                alert("All Fields are required");
            }else{
                const response = await axios.post("http://localhost:1000/api/v1/users/sign-in",Data);
                setData({username :"",email:"",password:""})
                alert(response.data.message)
                history("/log-in")
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-blue-400 rounded'>
                    <div className='text-2xl font-semibold'>SignUp</div>
                    {/* {error && <div className='text-red-500'>{error}</div>} */}
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
                        <Link to="/log-in" className='text-white hover:text-black '>
                            Already having an account? <span className='hover:underline'>Login here</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup
