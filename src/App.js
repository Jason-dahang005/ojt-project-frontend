import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Createorg from './pages/Createorg';
import Orglist from './pages/Orglist'
import Bill from './pages/Bill';
import Home from './pages/Home';
import Unauthenticated from './actions/Unauthenticated';
import Authenticated from './actions/Authenticated';
import Message from './pages/Message'
import Notification from './pages/Notification'
import Invitation from './pages/Invitation'
import Logbook from './pages/Logbook'





const App = () => {

  return (
    
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/dashboard" element={<Dashboard/> } />
        <Route path="/CO" element={<Createorg/> } />
        <Route path="/OL" element={<Orglist/> } />
        <Route path="/Bill" element={<Bill/> } />
        <Route path="/sms" element={<Message/> } />
        <Route path="/notif" element={<Notification/> } />
        <Route path="/invi" element={<Invitation/> } />
        <Route path="/logbook" element={<Logbook/> } />



     
        <Route element={<Unauthenticated/>} >
          <Route path="/" element={<Login/> } />
          <Route path="/register" element={<Register/> } />
        </Route>
        <Route element={<Authenticated/>} >
          <Route path="/dashboard" element={<Dashboard/> } />
        </Route>
      </Routes>
      </BrowserRouter>  
   
    
  </div>
  );
}

export default App;
