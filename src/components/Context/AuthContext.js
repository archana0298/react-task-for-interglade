import { createContext, useState } from "react"
import App from "../../App";

export const AuthContextToProvide = createContext();

const AuthContext = () => {
    const [auth, setAuth] = useState();

    return (
        <AuthContextToProvide.Provider value={{auth, setAuth}} >
            <App />
        </AuthContextToProvide.Provider>
    )
}
export default AuthContext;