import React from 'react'
import '../assets/styles/CO.css'
import Dashboard from '../pages/Dashboard'
const CO = () => {
  return (
    
    <div>
      <Dashboard/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="container">


    <label for="fname">Organazation Name</label>
    <input type="text"placeholder="Organazation Name.."/>
    <label for="fname">Description</label>
    <input type="text"placeholder="Description.."/>

   
    <a href="OL" class="button">Confirm</a>
    
  </div>
    </div>
    

   
      )
    }
    
    export default CO