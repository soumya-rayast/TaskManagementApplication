import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios"
const Cards = ({ home, setInputDiv, data }) => {
    const headers = {
        id:localStorage.getItem("id"),
        authorization :`Bearer ${localStorage.getItem("token")}`,
    }
    const handleCompletetasks = async (id) => {
        try {
        await axios.put(`http://localhost:1000/api/v2/tasks/toggle-completion/${id}`,{headers});        
        } catch (error) {
            console.log(error)
        }
    }
    const handleImportantTasks = async (id)=>{
        try {
            await axios.put(`http://localhost:1000/api/v2/tasks/toggle-importance/${id}`,{headers});        
            } catch (error) {
                console.log(error)
            }
    }
    return (
        <div className='grid grid-cols-4 gap-4 p-4 '>
            {data.map((item, index) => (
                <div className='flex flex-col justify-between border bg-blue-500 rounded-sm p-4'>
                    <div >
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p className='text-gray-300 my-2'>{item.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${item.complete === false ? "bg-red-400" : "bg-green-700"} p-2 rounded w-3/6`} onClick={() => handleCompletetasks(item._id)}>{item.complete === true ? "Completed" : "In Completed"}</button>
                        <div className='text-white p-2 w-3/6 text-2xl flex justify-around'>
                            <button onClick={()=>handleImportantTasks(item._id)}>
                                {data.important ===false ? <CiHeart /> : <FaHeart className='text-red-500'/>}
                                </button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>)
            )}
            {home === "true" && (
                <button onClick={() => setInputDiv("fixed")} className='flex flex-col justify-center border bg-blue-500 rounded-sm p-4 items-center hover:scale-105 hover:cursor-pointer transition-all duration-300'>
                    <IoIosAddCircle className='text-5xl' />
                    <div className="text-2xl mt-4">Add Task</div>
                </button>)}
        </div>
    )
}

export default Cards
