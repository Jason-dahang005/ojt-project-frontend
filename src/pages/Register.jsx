import {React, useState } from 'react'
import '../assets/styles/Register.css'
import axiosInstance from '../axios/interceptors'
import { useNavigate, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Register = () => {

  const navigate = useNavigate()

  const [register, setRegister] = useState({
    name:     '',
    email:    '',
    password: ''
  })

  const [error, setError] = useState(false)

  const [cookies, setCookies] = useCookies(['user'])


  const handleChange = (event) => {
    setRegister({
      ...register, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (register.name === '' || register.email === '' || register.password === '') {
      setError(true)
    }
    else if (register.password.length < 5) {
      console.log('Pass should be atleast 5 charactes')
      return
    }

    axiosInstance.post('register', register)
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
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              name='name'
              value={register.name}
              onChange={handleChange}
              className="name-input"
              placeholder="Enter name" />
              {
                error ?
                <span className='error-msg'>Name cannot be empty</span> : ""
              }
            </div>

            <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              value={register.email}
              onChange={handleChange}
              className="email-input"
              placeholder="Enter email" />
              {
                error ?
                <span className='error-msg'>Email cannot be empty</span> : ""
              }
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name='password'
              value={register.password}
              onChange={handleChange}
              className="password-input" 
              placeholder="Enter password" />
              {
                error ?
                <span className='error-msg'>Password cannot be empty</span> : ""
              }
            </div>

            <button type="submit" className='btn-submit'>Register</button>
          </form>
          <p>Already have an account? <Link to="/">login here!</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
