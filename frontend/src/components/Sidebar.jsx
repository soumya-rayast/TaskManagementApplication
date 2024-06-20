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
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completedTasks"
        },
        {
            title: "Incompleted tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedTasks"
        },
        {
            title: "Important tasks",
            icon: <MdLabelImportant />,
            link: "/importantTasks"
        }
    ]
    return (
        <>
            <div>
                <h2 className='text-xl font-semibold'>Soumya Rayast</h2>
                <h4 className='my-1 text-gray-400'>rayastsoumya@gmail.com</h4>
                <hr />
            </div>
            <div>
                {data.map((item, index) => (
                    <Link to={item.link} key={index} className='my-2 flex items-center hover:bg-gray-500 p-2 rounded transition-all duration-300'>
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
                <button className='bg-gray-600 w-full p-2 rounded'>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default Sidebar
