import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
    </div>
  )
}

export default Headers
