import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import SideMenu from '../src/pages/SideMenu';
import DashboardPage from '../src/pages/Dashboard';
import ListPage from '../src/pages/List'
import OrgaPage from '../src/pages/Orga'
import MainPage from './/pages/Main'


const App =() => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/board" element={<DashboardPage/>}/>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/or" element={<OrgaPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
    </Routes>
  </BrowserRouter>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/dash" element={<SideMenu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  </div>
  );
}

export default App;