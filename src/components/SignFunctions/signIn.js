import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import { TokenContext } from "../../context/UserContext";
import axios from "axios";

export default function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setToken, setId } = useContext(TokenContext)


    function signIn(event){

        event.preventDefault()

        if(!email || !password){
            return alert("preencha todos os campos.")
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, {email,password})
        .then((response) => {
            setToken(response.data.token)
            localStorage.setItem("token",JSON.stringify(response.data.token))

            setId(response.data.id)
            localStorage.setItem("id",JSON.stringify(response.data.id))
            navigate("/timeline")
        })
        .catch((error) => {
            alert(`STATUS ${error.response.status} ${error.response.data}`)
        })


        

    }



    return(
        <SignUpSpace>
            <Form onSubmit={signIn}>
                <input
                placeholder="e-mail"
                type="text"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <input 
                placeholder="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}/>

                <button type="submit">Sign In</button>
            </Form>
            <Link to="/sign-up">First time? Create an account!</Link>

        </SignUpSpace>
    )
}


const SignUpSpace = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 535px;
    height: 100vh;
    min-height: 500px;
    background-color: #333;
    font-family: 'Oswald', sans-serif;
    padding: 54px;
    box-sizing: border-box;

    a{
        font-family: 'Lato', sans-serif;
        text-decoration: none;
        color: white;
        font-size: 20px;
        line-height: 24px;
        margin-top: 8px;
    }
    

    @media(max-width: 1121px){
        width: 100%;
    }
   
`

const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;

  input{
            width: 429px;
            height: 65px;
            border: none;
            border-radius: 6px;
            margin: 7px 0px 6px 0px;
            padding: 0px 17px;
            box-sizing: border-box;
            color: #9F9F9F;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;

            &:disabled{
                background-color: #fafafa;
            }
        }

        button{
            width: 429px;
            height: 65px;
            border-radius: 6px;
            color: white;
            border: none;
            margin: 7px 0px 6px 0px;
            background-color: #1877F2;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;

            &:disabled{
                background-color: #224471;
            }
        }

        @media(max-width: 1121px){
        input,button{
            width: 330px;
        }
    }
`