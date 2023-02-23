import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Unauthenticated from './actions/Unauthenticated';
import Authenticated from './actions/Authenticated';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
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
