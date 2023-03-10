import Header from "../../components/Header/index.jsx";
import PostBox from "../../components/PostBox/index.jsx";
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
        <TitleContainer>
          <img
            src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
            alt="user"
          />
          <h1>Juvenal Juvêncio's posts</h1>
        </TitleContainer>
        <FeedContainer>
          <div>
            <PostBox></PostBox>
            <PostBox></PostBox>
          </div>
          {/* <TrendingBox></TrendingBox> */}
        </FeedContainer>
      </UserPageContainer>
    </>
  );
}
