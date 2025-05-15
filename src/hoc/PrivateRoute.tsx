import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthContext } from "../contexts/auth-context";

const PrivateRoute = () => {
    const {connected} = useAuthContext();
    const location = useLocation();
    
    if(!connected) {
        return <Navigate to={'/login'} state={{ from: location.pathname }} replace/>
    }

    return (
        <>        
            <Outlet/>
        </>
    )
};

export default PrivateRoute;