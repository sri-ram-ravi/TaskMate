import React, { useState } from 'react'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import ShowTask from './Components/ShowTask'

const App = () => {
  const [taskList,setTaskList]=useState([]);
  return (
    <div>
        <Header/>
        <AddTask taskList={taskList} setTaskList={setTaskList}/>
        <ShowTask taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default App