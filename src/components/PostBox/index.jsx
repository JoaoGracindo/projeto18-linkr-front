import {
  PostBoxContainer,
  PostContentContainer,
  PostInfoContainer,
} from "./style";
import { AiOutlineHeart } from "react-icons/ai";

export default function PostBox({pic_url, num_likes, description, name}) {
  return (
    <PostBoxContainer>
      <PostInfoContainer>
        <img
          src={pic_url}
          alt={name}
        />
        <AiOutlineHeart />
        <p>{num_likes} likes</p>
      </PostInfoContainer>
      <PostContentContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </PostContentContainer>
    </PostBoxContainer>
  );
}

