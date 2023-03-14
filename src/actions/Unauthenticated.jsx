import { Navigate, Outlet } from "react-router-dom";

const Unauthenticated = () => {
  const token = localStorage.getItem('user')
  return (
    token ? <Navigate to="dashboard" /> : <Outlet/>
  )
}

export default Unauthenticated
