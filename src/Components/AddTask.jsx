import React from 'react'

const AddTask = () => {
  return (
    <>
    <div class="row mt-3">
        <div class="col">
          <input type="text" class="form-control p-2" placeholder="Add Todo" aria-label="First name"/>
        </div>
        <div class="col">
        <button type="submit" class="btn btn-primary p-2">Submit</button>
        </div>
    </div>
    </>
  )
}

export default AddTask