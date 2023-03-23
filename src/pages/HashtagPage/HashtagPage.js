import Header from "../../components/Header/index.jsx";
import PostBox from "../../components/PostBox/index.jsx";
import TrendingTags from "../../components/Tags/Trending/trendingTable.js";
import { BlackBody } from "../../styles/BlackBodyGlobalStyle";
import { FeedContainer } from "../../styles/FeedContainer.js";
import { TitleContainer } from "../../styles/TitleContainer.js";
import { UserPageContainer } from "./style.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostComponent from "../../components/Post/postHashtags/timeline/PostModel.js";
import apiHashtags from "../../services/apiHashtags.js";

export default function HashtagPage() {
  const navigate = useNavigate();
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const token = JSON.parse(localStorage.token);

  useEffect((e) => {
    if (localStorage.token == undefined) {
      navigate("/");
    }
    getPosts(hashtag, token)
  }, []);

  async function getPosts(hashtag, token){
    const promise = await apiHashtags.getHashtagPosts(hashtag, token)
    setPosts(promise?.data)
    console.log(promise);
  }
  return (
    <>
      <BlackBody />
      <Header />

      <UserPageContainer>
        <input type="text" placeholder="Pesquise um usuário" />
        <TitleContainer>
          <h1>{"# " + hashtag}</h1>
        </TitleContainer>
        <FeedContainer>
          <div>
            {posts ? 
                posts.map(post => <PostComponent key={post.id} {...post} />) 
                : <></>
            }
          </div>
          <TrendingTags />
        </FeedContainer>
      </UserPageContainer>
    </>
  );
}