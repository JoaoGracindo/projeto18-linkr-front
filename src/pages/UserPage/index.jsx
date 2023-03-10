import Header from "../../components/Header/index.jsx";
import PostBox from "../../components/PostBox/index.jsx";
import TrendingTags from "../../components/Tags/Trending/trendingTable.js";
import { BlackBody } from "../../styles/BlackBodyGlobalStyle";
import { FeedContainer } from "../../styles/FeedContainer.js";
import { TitleContainer } from "../../styles/TitleContainer.js";
import { UserPageContainer } from "./style.jsx";

export default function UserPage() {
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
          <h1>Juvenal Juvêncio's posts</h1>
        </TitleContainer>
        <FeedContainer>
          <div>
            <PostBox />
            <PostBox />
          </div>
          <TrendingTags />
        </FeedContainer>
      </UserPageContainer>
    </>
  );
}
