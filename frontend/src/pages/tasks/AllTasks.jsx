import React, { useState ,useEffect,useMemo} from 'react'
import Cards from '../../components/Cards'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../../components/InputData';
import axios from 'axios';
const AllTasks = () => {
  const [inputDiv, setInputDiv] = useState("hidden")
  const [Data,setData] =useState(null);
  const headers = useMemo(()=>({ id: localStorage.getItem("id"), authorization: `Bearer ${localStorage.getItem("token")}` }),[])
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v2/tasks/get-all-tasks", {headers});
        if(response.data && response.data.data){
            setData(response.data.data);
        }else{
            console.error('No data found in response')
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  });
  return (
    <>
      <div>
        <div className='w-full flex justify-end px-4 py-2'>
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircle className='text-5xl text-blue-400 hover:text-blue-800 transition-all duration-300' />
          </button>
        </div>
        {Data && <Cards home={"true"} setInputDiv={setInputDiv} data={Data} />}
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
    </>
  )
}

export default AllTasks
