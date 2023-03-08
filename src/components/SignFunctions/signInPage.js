import SignIn from "./signIn";
import Linkr from "./Linkr";
import styled from "styled-components";

export default function SignInPage(){
    return(
        <Screen>
            <Linkr/>
            <SignIn/>
        </Screen>
    )
}

const Screen = styled.div`
    display: flex;
`