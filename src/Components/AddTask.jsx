import React, { useState } from 'react'

const AddTask = ({taskList,setTaskList}) => {

  const [taskName,setTaskName]=useState("")
  const handleTaskName=(event)=>setTaskName(event.target.value)

  const handleSubmit=(e)=>{
    e.preventDefault();

    const data=new Date()

    const newTask={
      id:Math.random()*10000,
      name:taskName,
      time:`${data.toLocaleTimeString()} ${data.toLocaleDateString()}`
    }
    if(taskName.length !== 0) setTaskList([...taskList,newTask])
    setTaskName("")
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="row mt-3 mb-4">
        <div className="col">
          <input type="text" className="form-control p-2" placeholder="Add Todo" aria-label="First name" maxLength={15} onChange={handleTaskName} value={taskName}/>
        </div>
        <div className="col">
        <button type="submit" className="btn btn-primary p-2">Add</button>
        </div>
    </div>
    </form>
  )
}

export default AddTask