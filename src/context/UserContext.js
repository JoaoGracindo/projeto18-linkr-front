import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext();

export const CheckUser = () => {
    const navigate = useNavigate()
    if (JSON.parse(localStorage.getItem("user")) === null) {
        navigate("/")
    } 
}

export default function UserProvider({ children }) {
    const lsUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(lsUser !== null ? lsUser : {})

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}