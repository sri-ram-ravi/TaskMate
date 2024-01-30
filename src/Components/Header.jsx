import React from 'react'

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-primary text-white mt-3 p-3">
        <div class="container d-flex justify-content-between">
            <h2 class="text-white">Task Mate</h2>
            <button type="button" class="btn btn-light">Light</button>
        </div>
      </nav>
    </div>
  )
}

export default Header