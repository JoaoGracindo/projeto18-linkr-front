import {
  PostBoxContainer,
  PostContentContainer,
  PostInfoContainer,
} from "./style";
import LikeButton from "../Post/LikeButton";
import { Link } from "react-router-dom";

export default function PostBox({
  id,
  pic_url,
  likesCount,
  likersNames,
  description,
  name,
  owner,
}) {
  return (
    <PostBoxContainer>
      <PostInfoContainer>
        <Link to={`/user/${owner}`}>
          <img src={pic_url} alt={name} />
        </Link>
        <LikeButton likesCount={likesCount} likersNames={likersNames} postId={id}/>
      </PostInfoContainer>
      <PostContentContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </PostContentContainer>
    </PostBoxContainer>
  );
}
