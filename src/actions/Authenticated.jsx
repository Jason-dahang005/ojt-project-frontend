import { Navigate, Outlet } from "react-router-dom";

const Authenticated = () => {
  const token = localStorage.getItem(['user'])
  return (
    token ? <Outlet/> : <Navigate to="/" />
  )
}

export default Authenticated
