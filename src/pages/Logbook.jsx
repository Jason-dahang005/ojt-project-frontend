import React from 'react'
import '../assets/styles/Logbook.css'
import { FcCalendar } from 'react-icons/fc';


const Logbook= () => {
  return (
    <div>
        <h1>LogBook</h1>
     
         <h4> Filter Calendar<FcCalendar/></h4>
         
         
        <table>
        
              <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Time/date</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Joven</td>
    <td>Gwapo</td>
    <td>12:50/05-25-2023</td>
    <td>view</td>
  </tr>
</table>
        </div>
  )
}

export default Logbook