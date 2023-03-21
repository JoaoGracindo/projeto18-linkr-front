
import PostBox from "./index";
import Header from "../../../Header/index";
import {  useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const token = JSON.parse(localStorage.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

export default function Timeline(){

    const [timeline, setTimeline] = useState([]);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const token = JSON.parse(localStorage.token);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;


    useEffect(() => {
        if (!token) {
            navigate("/");
        } 
        axios.get(`${url}/timeline`, config).
        then((response) => {
            setTimeline([...response.data]);
        })
        .catch((err) => {
            alert("An error occured while trying to fetch the posts, please refresh the page");
        })
    }, []);
    
    async function handleForm(e){
        e.preventDefault();
        if(link.length < 3) return alert("Deve haver um link! valido");
        const body = {
            link,
            description
        };

        try{
            await axios.post(`${url}/post-link`, body, config);

        }catch(err){
            alert('There was an error publishing your link');
        }
        setLink("");
        setDescription("");
    }


    return (
        <>
        <Header/>
        <div>
            <img />
            <form onSubmit={handleForm}>
                <p>What are you going to share today?</p>
                <input 
                    placeholder="https://..." 
                    onChange={(e) => setLink(e.target.value)} 
                    value={link}
                    type="url"
                />
                <input 
                    placeholder="Awesome article about #javascript"
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description}
                />
                <button type="submit"/>
            </form>
            <StyledFeed>
                {
                    timeline.length === 0 ? <p>There are no posts yet</p> : timeline.map((object) => <PostBox {...object}/>)
                }
            </StyledFeed>
        </div>
        </>
    )
}

const StyledPost = styled.div`
  img {
  }
  form {
  }
  button {
  }
`;

const StyledFeed = styled.div`

`;
