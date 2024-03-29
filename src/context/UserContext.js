import { createContext, useState } from "react";


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

    const lsId = localStorage.id
    const [id, setId] = useState(lsId !== null ? lsId : null)

    const lsImg = localStorage.img
    const [img, setImg] = useState(lsImg !== null ? lsImg : null)

    return (
        <TokenContext.Provider value={{ token, setToken, id, setId, img, setImg }}>
            {children}
        </TokenContext.Provider>
    )
}