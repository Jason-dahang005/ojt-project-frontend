import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Authenticated = () => {
  //const [cookies] = useCookies(['user'])

  const token = localStorage.getItem(['user'])
  return (
    token ? <Outlet/> : <Navigate to="/" />
  )
}

export default Authenticated
