import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Unauthenticated = () => {
  //const [cookies] = useCookies(['user'])
  const token = localStorage.getItem('user')
  return (
    token ? <Navigate to="dashboard" /> : <Outlet/>
  )
}

export default Unauthenticated
