import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Unauthenticated = () => {
  const [cookies] = useCookies(['user'])
  return (
    cookies?.user?.token ? <Navigate to="dashboard" replace={true} /> : <Outlet/>
  )
}

export default Unauthenticated
