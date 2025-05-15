import { useLayoutEffect } from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/auth-context";


const logOut = () => {
    const {logOutUser} = useAuthContext();
    
    useLayoutEffect(() => {
        logOutUser();
    }, [])

    return <Navigate to='/login' />;
  
};