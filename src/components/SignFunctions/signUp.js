import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [pic_url, setPic_url] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    function signUp(event){

        event.preventDefault()

        if(!email || !password || !username || !pic_url) {
            return alert("Preencha todos os campos")
        }

        setLoading(true)
        
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, {username,email,password,pic_url})
        .then( () => {
            alert("Usuário cadastrado com sucesso.")
            navigate("/")
        })
        .catch((error) => {
            alert(error.response.data)
            setLoading(false)
        })
        


    }



    return(
        <SignUpSpace>
            <Form onSubmit={signUp}>
                <input
                placeholder="e-mail"
                type="text"
                required
                disabled={loading}
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <input 
                placeholder="password"
                type="password"
                required
                disabled={loading}
                value={password}
                onChange={e => setPassword(e.target.value)}/>
                
                <input 
                placeholder="username"
                type="text"
                required
                disabled={loading}
                value={username}
                onChange={e => setUsername(e.target.value)}/>

                <input 
                placeholder="picture url"
                type="text"
                required
                disabled={loading}
                value={pic_url}
                onChange={e => setPic_url(e.target.value)}/>

                <button type="submit" disabled={loading}>Sign Up</button>
            </Form>
            <Link to="/">Switch back to log in</Link>

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