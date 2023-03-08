import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import dotenv from 'dotenv';
dotenv.config();

import { TokenContext, CheckToken } from "../../../context/UserContext";


export default function Feed(){

    useEffect(() => {
        CheckToken();

    }, []);
    const {token} = useContext(TokenContext);
    const url = process.env.REACT_APP_API_URL;

    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    
    async function handleForm(e){
        e.preventDefault();
        if(link.length < 3) return alert("Deve haver um link!");

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: {
                link,
                description
            }
        };
        try{
            await axios.post(`${url}post-link`, config);

        }catch(err){
            alert('There was an error publishing your link');
        }
        setLink("");
        setDescription("");
    }

    return (
        <div>
            <img />
            <form onSubmit={handleForm}>
                <p>What are you going to share today?</p>
                <input 
                    placeholder="https://..." 
                    onChange={(e) => setLink(e.target.value)} 
                    value={link}
                />
                <input 
                    placeholder="Awesome article about #javascript"
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description}
                />
                <button type="submit"/>
            </form>
        </div>
    )
}

const StyledPost = styled.div`
    img{

    }
    form{

    }
    button{

    }
`