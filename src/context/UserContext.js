import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const TokenContext = createContext();

export const CheckToken = () => {
    // const navigate = useNavigate()
    // if (localStorage.token === null) {
    //     navigate("/")
    // } 
}

export default function TokenProvider({ children }) {
    const lsToken = localStorage.token
    const [token, setToken] = useState(lsToken !== null ? lsToken : null)

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}