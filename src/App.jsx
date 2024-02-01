import React, { useState } from 'react'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import ShowTask from './Components/ShowTask'

const App = () => {
  const [taskList,setTaskList]=useState([]);
  const [updateTask,setUpdateTask]=useState({});
  return (
    <div>
        <Header/>
        <AddTask taskList={taskList} setTaskList={setTaskList} updateTask={updateTask} setUpdateTask={setUpdateTask}/>
        <ShowTask taskList={taskList} setTaskList={setTaskList} updateTask={updateTask} setUpdateTask={setUpdateTask}/>
    </div>
  )
}

export default App