import React from 'react'

const AddTask = () => {
  return (
    <form>
    <div className="row mt-3 mb-4">
        <div className="col">
          <input type="text" className="form-control p-2" placeholder="Add Todo" aria-label="First name" maxLength={15}/>
        </div>
        <div className="col">
        <button type="submit" className="btn btn-primary p-2">Add</button>
        </div>
    </div>
    </form>
  )
}

export default AddTask