import React from 'react'
import '../assets/styles/Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axios/interceptors'
import { useCookies } from 'react-cookie';

const Sidebar = () => {

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

  return (
    <div>
      <aside>
        <nav>
          <ul className="menu"> 
            <li><a href="">dashboard</a></li>
            <li><a href="">users</a></li>
            <li><a href="">logbook</a></li>
            <li><a href="">settings</a></li>
            <li><a href="">organizations</a></li>
            <li><Link onClick={handleLogout}>logout</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
