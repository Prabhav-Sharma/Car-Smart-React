import React from 'react'
import { useAuth } from '../contexts/Providers/AuthProvider/AuthProvider'
import {Navigate, Outlet} from "react-router-dom";


function GuestRoutes() {
const {authState} = useAuth();
const {isAuthenticated} = authState
return isAuthenticated? <Navigate to={"/"}/>: <Outlet/>;
}

export {GuestRoutes};