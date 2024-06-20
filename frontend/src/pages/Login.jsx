import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-gray-800 rounded'>
                    <div className='text-2xl font-semibold'>LogIn</div>
                    <input
                        type="username"
                        placeholder='username'
                        name='username'
                        className='bg-gray-700 px-3 py-2 my-3 w-full rounded' />
                    <input
                        type="password"
                        placeholder='password'
                        name='password'
                        className='bg-gray-700 px-3 py-2 my-3 w-full rounded' />
                    <div className='w-full flex items-center justify-between'>
                        <button
                            className='bg-blue-400 text-xl font-semibold text-white px-3  py-2 rounded'>
                            LogIn
                        </button>
                        <Link  to="/signup" className='text-gray-400 hover:text-gray-200'>Not having an account ? SignUp here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
