import SideMenu from "../pages/SideMenu"
import "./List.css"
export default function ListPage(){
    return(
<div>  
<div class="topnav">
  <input type="text" placeholder="Search.."/>
</div>
<table id="customers">
  <tr>
    <th>UserName</th>
    <th>Date/Time</th>
    <th>Organazation</th>
    <th>Status</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>Ople</td>
    <td>05-12-10/ 12:30pm</td>
    <td>Fligno</td>
    <td>Active</td>
    <td>view</td>
  </tr>
</table>
<div>
        <SideMenu/>
        </div>
     </div>
    )
}