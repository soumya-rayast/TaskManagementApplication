import React, { useState } from 'react'
import Cards from '../../components/Cards'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../../components/InputData';
const AllTasks = () => {
  const [inputDiv, setInputDiv] = useState("hidden")
  return (
    <>
      <div>
        <div className='w-full flex justify-end px-4 py-2'>
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircle className='text-5xl text-blue-400 hover:text-blue-800 transition-all duration-300' />
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv} />
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
    </>
  )
}

export default AllTasks
