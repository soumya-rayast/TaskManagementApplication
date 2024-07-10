import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <div className='h-[98vh] flex justify-center items-center'>
                <div className='p-4 w-2/6 bg-blue-400 rounded'>
                    <div className='text-2xl font-semibold'>SignUp</div>
                    <input
                        type="username"
                        placeholder='username'
                        name='username'
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded' />
                    <input
                        type="email"
                        placeholder='email'
                        name='xyz@example.com'
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded'
                        required />
                    <input
                        type="password"
                        placeholder='password'
                        name='password'
                        className='bg-white px-3 text-black py-2 my-3 w-full rounded' />
                    <div className='w-full flex items-center justify-between'>
                        <button
                            className='bg-white text-xl font-semibold text-black px-3  py-2 rounded hover:text-blue-600 '>
                            LogIn
                        </button>
                        <Link  to="/login" className='text-white hover:text-black '>
                        Already having an account? <span className='hover:underline'>Login here</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
