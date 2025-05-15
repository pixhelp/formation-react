import { useState } from "react";
import AuthContext from "../contexts/auth-context"


const AuthContextProvider = ({ children } : { children: React.ReactNode }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [id, setId] = useState<number | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [connected, setConnected] = useState(false);
    
    const loginUser = (accessToken: string, user: { id: number; email: string }) => {
        setAccessToken(accessToken);
        setId(user.id);
        setEmail(user.email);
        setConnected(true);
    };

    const logOutUser = () => {
        setAccessToken(null);
        setId(null);
        setEmail(null);
        setConnected(false);
    };

    return (
        <AuthContext.Provider value={{
            accessToken,
            id,
            email,
            connected,
            loginUser,
            logOutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider