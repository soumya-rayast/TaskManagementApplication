import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
const Cards = ({ home ,setInputDiv }) => {
    const data = [
        {
            title: "The best coding Channel1",
            desc: "I have to create a my channel the best ever coding channel in hindi for those who do not understand english properly.",
            status: "Incomplete"
        },
        {
            title: "The best coding Channel2",
            desc: "I have to create a my channel the best ever coding channel in hindi for those who do not understand english properly.",
            status: "Incomplete"
        },
        {
            title: "The best coding Channel3",
            desc: "I have to create a my channel the best ever coding channel in hindi for those who do not understand english properly.",
            status: "Complete"
        }
    ];
    return (
        <div className='grid grid-cols-4 gap-4 p-4 '>
            {data.map((item, index) => (
                <div className='flex flex-col justify-between border bg-gray-600 rounded-sm p-4'>
                    <div >
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p className='text-gray-300 my-2'>{item.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${item.status === 'Incomplete' ? "bg-red-400" : "bg-green-700"} p-2 rounded w-3/6`}>{item.status}</button>
                        <div className='text-white p-2 w-3/6 text-2xl flex justify-around'>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>)
            )}
            {home === "true" && (
                <button onClick={()=>setInputDiv("fixed")} className='flex flex-col justify-center border bg-gray-600 rounded-sm p-4 items-center hover:scale-105 hover:cursor-pointer transition-all duration-300'>
                    <IoIosAddCircle className='text-5xl' />
                    <div className="text-2xl mt-4">Add Task</div>
                </button>)}
        </div>
    )
}

export default Cards
