import { useContext, useEffect, useState } from "react";
import dotenv from 'dotenv';
dotenv.config();

import { UserContext, CheckUser } from "../../../context/UserContext";


export default function CreatePost(){
    const {user} = useContext(UserContext);
    CheckUser();

    const url = process.env.REACT_APP_API_URL;

    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    
    async function handleForm(e){
        e.preventDefault();
        const body = {
            link,
            description
        };
        try{

        }catch(err){
            alert('There was an error publishing your link');
        }

    }

    return (
        <div>
            <img/>
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