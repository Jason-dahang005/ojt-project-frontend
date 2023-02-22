import img from '../pages/ople.jpeg'
import TheContents from "../pages/TheContents"

const TheHeader = () => {

  const style1 = {
    "borderRadius" : "25px",
    "border" : "2px solid black",
    "backgroundColor" : "#dddddd",
    "padding" : "20px",
    "width" : "auto",
    "height" : "300px",
  }

  const style2 = {
    "borderRadius" : "25px",
    "border" : "1px solid black",
    "backgorundColor" : "#b4b4b4",
    "padding" : "5px",
    "width" : "auto",
    "height" : "260px",
    "display" : "flex",
    "justifyContent" : "center",
  }

  const style3 = {
    "borderRadius": "50%",
    "width" : "100px",
    "display" : "flex",
    "justifyContent" : "center",
    "border" : "1px solid white",
    "backgroundColor": "green"

  }
  const style4 ={
    "textAlign" : "center",
    "fontWeight": "bolder"
  }
 

    return(
      <div>
      <ul style={style1}>
        <ul style={style2}>
            <li><img src={img} style={style3}/><br/> <h2 style={style4}>Mr.Ople</h2></li>  
        </ul>
      </ul>
      <br/>
      <TheContents/>
      </div>
     
    );
    
  
  
   
}

export default TheHeader