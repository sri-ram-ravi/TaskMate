import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import ShowTask from './Components/ShowTask'

const App = () => {
  const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem("task-item")) || []);
  const [updateTask,setUpdateTask]=useState({});

  useEffect(()=>{
    localStorage.setItem("task-item",JSON.stringify(taskList))
  },[taskList])


  return (
    <div>
        <Header/>
        <AddTask taskList={taskList} setTaskList={setTaskList} updateTask={updateTask} setUpdateTask={setUpdateTask}/>
        <ShowTask taskList={taskList} setTaskList={setTaskList} updateTask={updateTask} setUpdateTask={setUpdateTask}/>
    </div>
  )
}

export default App