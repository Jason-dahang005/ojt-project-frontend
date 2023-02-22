import SideMenu from "../pages/SideMenu"
import './Dash.css'

export default function DashboardPage(){
    return( 
        <div> 
        <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Number of Oraganization</div>
            <div class="number">40</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Today</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Number of User</div>
            <div class="number">38</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
       
          <i class='bx bx-cart cart three' ></i>
        </div>
        
          <i class='bx bxs-cart-download cart four' ></i>
        </div>
        <SideMenu/>
     </div>
 
   
    )
}