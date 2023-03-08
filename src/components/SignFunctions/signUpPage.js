import SignUp from "./signUp";
import Linkr from "./Linkr";
import styled from "styled-components";

export default function SignUpPage(){
    return(
        <Screen>
            <Linkr/>
            <SignUp/>
        </Screen>
    )
}

const Screen = styled.div`
    display: flex;
`