import {
  PostBoxContainer,
  PostContentContainer,
  PostInfoContainer,
} from "./style";
import LikeButton from "../Post/LikeButton";

export default function PostBox({pic_url, num_likes, description, name}) {
  return (
    <PostBoxContainer>
      <PostInfoContainer>
        <img
          src={pic_url}
          alt={name}
        />
        <LikeButton />
      </PostInfoContainer>
      <PostContentContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </PostContentContainer>
    </PostBoxContainer>
  );
}

