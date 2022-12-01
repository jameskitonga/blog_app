import { createContext,useState } from "react";

const LogInContext = createContext()
export const LoginState = ({ children }) => {
    const [isLogin, setLogin] = useState({
        is_loggedIn: localStorage.getItem('access_token') ? true : false,
        username: '',
        email: '',
    })
    return (
        <LogInContext.Provider value={{ islogged:[isLogin, setLogin]}}>
            {children}
        </LogInContext.Provider >
    )
}

export default LogInContext;