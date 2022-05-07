import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider"

function hasRoles(rolesReq, isRole) {
    return rolesReq.reduce((prev, role) => {
        return prev && isRole(role)
    }, true)
}


export default function PrivateRoute({ children, roles = [], ...rest }) {
    const { isAuthenticated, isRole } = useContext(AuthContext);

    return isAuthenticated ? (hasRoles(roles, isRole) ? (children) : <Navigate to='/404' replace />) : (<Navigate to='/account/login' replace />)
}