import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const data = [
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
    return (
        <>
            <div>
                <h2 className='text-xl font-semibold text-blue-500'>Soumya Rayast</h2>
                <h4 className='my-1 text-blue-400'>rayastsoumya@gmail.com</h4>
                <hr/>
            </div>
            <div>
                {data.map((item, index) => (
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
                <button className='bg-blue-600 w-full p-2 rounded text-xl hover:bg-blue-800'>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default Sidebar
