import {
  PostBoxContainer,
  PostContentContainer,
  PostInfoContainer,
} from "./style";
import LikeButton from "../Post/LikeButton";

export default function PostBox() {
  return (
    <PostBoxContainer>
      <PostInfoContainer>
        <img
          src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
          alt="user"
        />
        <LikeButton />
      </PostInfoContainer>
      <PostContentContainer>
        <h3>Juvenal Juvêncio</h3>
        <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
      </PostContentContainer>
    </PostBoxContainer>
  );
}
