import Header from "../../components/Header/index.jsx";
import TrendingTags from "../../components/Tags/Trending/trendingTable.js";
import { BlackBody } from "../../styles/BlackBodyGlobalStyle";
import { FeedContainer, FeedWrapper } from "../../styles/FeedContainer.js";
import { TitleContainer } from "../../styles/TitleContainer.js";
import { UserPageContainer } from "./style.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PostComponent from "../../components/Post/timeline/PostModel.js";

export default function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const token = JSON.parse(localStorage.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (localStorage.token == undefined) {
      navigate("/");
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}`, config)
      .then((response) => {
        setPosts([...response.data]);
        console.log(response.data)
      })
      .catch((response) => {
        console.log(response.message);
      });
  }, [id]);

  return (
    <>
      <BlackBody />
      <Header />

      {posts.length > 0 ? (
        <UserPageContainer>
          <input type="text" placeholder="Pesquise um usuário" />
          <TitleContainer>
            <img src={posts[0]?.pic_url} alt="user" />
            <h1>{posts[0]?.name}'s posts</h1>
          </TitleContainer>
          <FeedContainer>
            <FeedWrapper>
              {posts.map((p) => (
                <PostComponent key={p.id} {...p} />
              ))}
            </FeedWrapper>
            <TrendingTags />
          </FeedContainer>
        </UserPageContainer>
      ) : (
        <UserPageContainer>
          <h1>Esse usuário não possui posts</h1>
        </UserPageContainer>
      )}
    </>
  );
}
