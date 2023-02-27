import React from 'react'
import '../assets/styles/Login.css'
import axiosInstance from '../axios/interceptors'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Login = () => {

  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email:    '',
    password: ''
  })

  const [error, setError] = useState(false)

  const [cookies, setCookies] = useCookies(['user'])

  const handleChange = (event) => {
    setLogin({
      ...login, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (login.name === '' || login.email === '' || login.password === '') {
      setError(true)
    }

    axiosInstance.post('login', login)
    .then((response) => {
      const credential = response?.data
      setCookies('user', credential)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className="contain">
        <div className="login">
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-3 w-3"
                    src="logo.png"/>
            </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              value={login.email}
              onChange={handleChange}
              className="email-input"
              placeholder="Enter email" />
              {
                error ?
                <span className='error-msg'>Email cannot be empty</span> : ""
              }

            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name='password'
              value={login.password}
              onChange={handleChange}
              className="password-input" 
              placeholder="Enter password" />
              {
                error ?
                <span className='error-msg'>Password cannot be empty</span> : ""
              }

            <button type="submit">Login</button>
          </form>

          <p>don't have an account? <Link to="/register">register here!</Link></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
