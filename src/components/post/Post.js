import { useContext } from "react";

import AuthContext from "../../context/AuthContext";

export default function Post(){

    const {token} = useContext(AuthContext);

    return (
        <>
        </>
    )
}