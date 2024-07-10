import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-blue-400 rounded'>
                    <div className='text-2xl font-semibold'>LogIn</div>
                    <input
                        type="username"
                        placeholder='username'
                        name='username'
                        className='bg-white-700 px-3 py-2 my-3 w-full  text-black rounded' />
                    <input
                        type="password"
                        placeholder='password'
                        name='password'
                        className='bg-white-700 px-3 py-2 my-3 w-full text-black rounded' />
                    <div className='w-full flex items-center justify-between'>
                        <button
                            className='bg-white text-xl font-semibold text-black px-3  py-2 rounded hover:text-blue-600 '>
                            LogIn
                        </button>
                        <Link  to="/signup" className='text-white hover:text-black '>Not having an account ? <span className='hover:underline'>SignUp here</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
