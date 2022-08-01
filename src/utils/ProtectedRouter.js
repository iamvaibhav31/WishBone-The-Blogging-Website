import { Navigate ,Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Authcontext from '../context/Authcontext'



const ProtectedRoutes = () => {
    let data = useContext(Authcontext)
    return data.userData===null?<Outlet/>:<Navigate to="/" />
}

export default ProtectedRoutes;

export const AuthenticatedRoutes = () => {
    let data = useContext(Authcontext)
    return data.userData===null?<Navigate to="/" />:<Outlet/>
}