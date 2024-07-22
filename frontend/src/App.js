import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import AllTasks from "./pages/tasks/AllTasks.jsx";
import ImportantTasks from "./pages/tasks/ImportantTasks.jsx";
import CompletedTasks from "./pages/tasks/CompletedTasks.jsx";
import IncompletedTasks from "./pages/tasks/InCompletedTasks.jsx"
import { Routes, Route,Navigate} from 'react-router-dom'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import {login as loginAction} from './store/auth.js';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(()=>{
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(loginAction())
    }
  },[dispatch])
  return (
    <div className='bg-gray-100 text-white h-screen p-2 relative'>
      <Routes>
      <Route path='/sign-in' element={<Signup />} />
      <Route path='/log-in' element={<Login />} /> 
        <Route exact path='/' element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />}> 
          <Route index element={<AllTasks />} />
          <Route path='/importantTasks' element={<ImportantTasks />} />
          <Route path='/completedTasks' element={<CompletedTasks />} />
          <Route path='/incompletedTasks' element={<IncompletedTasks />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
