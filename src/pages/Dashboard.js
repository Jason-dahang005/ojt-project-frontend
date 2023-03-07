
import React, { useState } from "react";
import { IoIosNotifications} from 'react-icons/io';
import '../assets/styles/Dash.css'
import styles from  "../assets/styles/Modal.module.css"
import Bill from'./Bill'
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
<header>
  <div class="containe">
    <div class="logo-box">
     
       <h1>FLIGNO</h1>
     
    </div>
    <nav>
    <ul>
      <li><h3><a href="CO">Create Org</a></h3></li>
      <li><h3><a href="OL">Org List</a></h3></li>
      <li><h3><a href="CO">Message</a></h3></li>
      <li><h3><a href="OL">Invitation</a></h3></li>
      <li><h3><a href="Bill"><IoIosNotifications/> </a></h3></li>
      
   </ul>
  </nav>
  </div>
  
</header>
</div>
   
  )
}

export default Dashboard
