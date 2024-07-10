import React from 'react'
import { ImCross } from "react-icons/im";
const InputData = ({inputDiv,setInputDiv}) => {
    return (
        <>
            <div className={`${inputDiv} top-0 left-0 bg-blue-200 opacity-80 h-screen w-full`}>
            </div>
            <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen  w-full`}>
                <div className='w-2/6 bg-blue-500 p-4 rounded'>
                    <div className='flex justify-end'>
                        <button className='text-xl' onClick={()=>setInputDiv("hidden")}>
                            <ImCross />
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder='Title'
                        name='title'
                        className='px-3 py-2 text-black rounded w-full bg-white my-3'
                    />
                    <textarea
                        name="desc"
                        id=""
                        type="text"
                        cols="30"
                        rows="10"
                        placeholder='Description ...'
                        className='px-3 py-2 text-black rounded w-full bg-white my-3'
                    ></textarea>
                    <button
                        className='px-3 py-2 bg-blue-300 rounded text-white  hover:bg-blue-900 text-xl font-semibold'>
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}
export default InputData