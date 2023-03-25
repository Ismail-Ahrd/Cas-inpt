import React from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext'

const RequireAuth = () => {
    const {currentUser}=useAuth()
    const location=useLocation()
  return (
    currentUser?<Outlet/>:<Navigate to="/signin" state={{ from: location }} replace />
    )
}

export default RequireAuth