import React, { useEffect, useState } from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../store/auth';
import axios from 'axios';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true)
    const menuItems = [
        {
            title: "All tasks",
            icon: <CgNotes />,
            link: '/'
        },
        {
            title: "Important tasks",
            icon: <MdLabelImportant />,
            link: "/importantTasks"
        },
        {
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completedTasks"
        },
        {
            title: "Incompleted tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedTasks"
        }
    ]

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:1000/api/v2/tasks/get-all-tasks", { headers });
            console.log("API Response :",response.data)
            if(response){
                setData(response.data.data)
            }
            } catch (error) {
                console.log("Error fetching tasks:",error);
            }finally{
                setLoading(false)
            }
        };
        fetchTasks();
    }, [headers]);
    console.log(data)

    const logout = () => {
        dispatch(logoutAction())
        localStorage.clear("id")
        localStorage.clear("token")
        navigate("/sign-in")

    }
    return (
        <>
            {
                loading ? <div>Loading...</div> :data ? (
                    <div>
                        <h2 className='text-xl font-semibold text-blue-500'>{data.username}</h2>
                        <h4 className='my-1 text-blue-400'>{data.email}</h4>
                        <hr />
                    </div>
                ) : (<div className='text-xl font-semibold text-blue-500'>No Data Available</div>) 
            }
            <div>
                {menuItems.map((item, index) => (
                    <Link to={item.link} key={index} className='my-2 bg-blue-500 flex items-center hover:bg-blue-800 p-2 rounded transition-all duration-300'>
                        <div className="mr-2">
                            {item.icon}
                        </div>
                        <div>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <button className='bg-blue-600 w-full p-2 rounded text-xl hover:bg-blue-800' onClick={logout}>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default Sidebar
