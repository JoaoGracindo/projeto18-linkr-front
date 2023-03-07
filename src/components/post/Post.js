import { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";

export default function CreatePost(){

    const [link, setLink] = useState();
    const [description, setDescription] = useState();

    
    function handleForm(e){
        e.preventDefault();

        const form = {
            link,
            description
        };


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
            </form>
        </div>
    )
}