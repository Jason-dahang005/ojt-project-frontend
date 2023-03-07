import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Unauthenticated from './actions/Unauthenticated';
import Authenticated from './actions/Authenticated';
import Layout from './components/Layout';
import Organization from './pages/Organization';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        {/* routes for unauthenticated */}
        <Route element={<Unauthenticated/>} >
          <Route path="/" element={<Login/> } />
          <Route path="/register" element={<Register/> } />
        </Route>

        {/* routes for authenticated */}
        <Route element={<Authenticated/>} >
          <Route element={<Layout/>} >
            <Route exact path="/dashboard" element={<Dashboard/> } />
            <Route path="/organization/:id" element={<Organization/> } />
          </Route>  
        </Route>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
