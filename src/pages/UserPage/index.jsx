import Header from "../../components/Header/index.jsx";
import PostBox from "../../components/PostBox/index.jsx";
import TrendingTags from "../../components/Tags/Trending/trendingTable.js";
import { BlackBody } from "../../styles/BlackBodyGlobalStyle";
import { FeedContainer } from "../../styles/FeedContainer.js";
import { TitleContainer } from "../../styles/TitleContainer.js";
import { UserPageContainer } from "./style.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const token = JSON.parse(localStorage.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect((e) => {
    if (localStorage.token == undefined) {
      navigate("/");
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}`, config)
      .then((response) => {
        setPost([...response.data]);
        const oi = [...response.data];
        console.log(oi[0]);
      });
  }, []);

  return (
    <>
      <BlackBody />
      <Header />

      <UserPageContainer>
        <input type="text" placeholder="Pesquise um usuário" />
        <TitleContainer>
          <img
            src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
            alt="user"
          />
          <h1>{}'s posts</h1>
        </TitleContainer>
        <FeedContainer>
          <div>
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
          </div>
          <TrendingTags />
        </FeedContainer>
      </UserPageContainer>
    </>
  );
}
