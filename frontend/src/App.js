import React from 'react';
import Home from './pages/Home';
import AllTasks from "./pages/tasks/AllTasks.jsx";
import ImportantTasks from "./pages/tasks/ImportantTasks.jsx";
import CompletedTasks from "./pages/tasks/CompletedTasks.jsx";
import IncompletedTasks from "./pages/tasks/InCompletedTasks.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} >
          <Route index element={<AllTasks/>} />
          <Route path='/importantTasks' element={<ImportantTasks/>}/>
          <Route path='/completedTasks' element={<CompletedTasks/>}/>
          <Route path='/incompletedTasks' element={<IncompletedTasks/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
