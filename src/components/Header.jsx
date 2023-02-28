import React from 'react'
import '../assets/styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axios/interceptors'
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react'

import { GoBell } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'

const Header = () => {

  const [user, setUser] = useState([])
  
  const style1 = {
    'cursor': 'pointer'
  }

  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleLogout = () => {
    axiosInstance.post('logout')
    .then(response => {
      removeCookie('user')
    }).catch(error => {
      console.log(error)
    })
  }

  const fetchData = () => {
    axiosInstance.get('fetchData', {
      'headers': {
        'Authorization': `Bearer ${cookies.user.token}`
       }
    })
    .then((response) => {
      setUser(response.data.user)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <header>
      <div className="system-logo">
        <h1>LOGO</h1>
      </div>
      <div className="header-icons">
        <GoBell/>
        <FaUserCircle/>
        
        {
       user.name
      }
      <HiOutlineLogout style={style1} onClick={handleLogout}/>
      </div>
    </header>
  )
}

export default Header
