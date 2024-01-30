import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-primary text-white mt-3 p-3">
        <div className="container d-flex justify-content-between">
            <h2 className="text-white">Task Mate</h2>
            <button type="button" className="btn btn-light">Light</button>
        </div>
      </nav>
    </div>
  )
}

export default Header