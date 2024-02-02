import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'
import React, { useEffect, useState } from 'react'

const AddTask = ({taskList,setTaskList,updateTask,setUpdateTask}) => {

  const [taskName,setTaskName]=useState("")
  const handleTaskName=(event)=>setTaskName(event.target.value)

  useEffect(()=>{
    if(updateTask!==toBeEmpty) setTaskName(updateTask.name)
  },[updateTask])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new Date()

    if(updateTask.id){
      setTaskList(taskList.map(task=>task.id===updateTask.id?{...task,name:taskName,time:`${data.toLocaleTimeString()} ${data.toLocaleDateString()}`}:task))
      setTaskName("")
    }else{
      const newTask={
        id:Math.random()*10000,
        name:taskName,
        time:`${data.toLocaleTimeString()} ${data.toLocaleDateString()}`
      }
      if(taskName && taskName.length !== 0) setTaskList([...taskList,newTask])
      setTaskName("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="row mt-3 mb-4">
        <div className="col">
          <input type="text" className="form-control p-2" placeholder="Add Todo" aria-label="First name" maxLength={15} onChange={handleTaskName} value={taskName || ""}/>
        </div>
        <div className="col">
        <button type="submit" className="btn btn-primary p-2">{(updateTask.id)?"Update":"Add"}</button>
        </div>
    </div>
    </form>
  )
}

export default AddTask