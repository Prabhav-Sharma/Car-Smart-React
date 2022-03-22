import React from 'react'
import { useAuth } from '../contexts/Providers/AuthProvider/AuthProvider'
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRoutes() {
const {authState} = useAuth();
const {isAuthenticated} = authState;
return isAuthenticated? <Outlet />: <Navigate to={"/login"}/>
}

export {ProtectedRoutes};