import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import { TokenContext } from "../../context/UserContext";
import apiLikes from "../../services/apiLikes";

export default function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);

  const { token } = useContext(TokenContext);

  //   useEffect(() => {
  //     //verificar se o usuário já curtiu, se já curtiu setLiked(true)
  //   }, [])

  async function postLike() {
    await apiLikes
      .postLike(token, postId)
      .then((res) => {
        setLiked(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  async function deleteLike() {
    await apiLikes
      .deleteLike(token, postId)
      .then((res) => {
        setLiked(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  const tooltipStyle = {
    color: "#505050",
    background: "white",
    width: "fit-content",
    size: "11px",
    position: "absolute",
  };
  const heartStyled = {
    color: liked ? "red" : "white",
  };
  const tooltipText = liked
    ? "Você, Fulana e outras x pessoas"
    : "Fulana, Fulano e outras x pessoas";
  return (
    <Container>
      {liked ? (
        <AiFillHeart
          style={heartStyled}
          data-tooltip-id="like-tooltip"
          data-tooltip-content={tooltipText}
          onClick={() => {
            deleteLike();
          }}
        />
      ) : (
        <AiOutlineHeart
          style={heartStyled}
          data-tooltip-id="like-tooltip"
          data-tooltip-content={tooltipText}
          onClick={() => {
            postLike();
          }}
        />
      )}
      <p>x likes</p>
      <Tooltip place="bottom" style={tooltipStyle} id="like-tooltip" />
    </Container>
  );
}

const Container = styled.div`
  svg {
    font-size: 25px;

    color: white;

    margin-top: 15px;

    outline: none;

    cursor: pointer;

    @media (max-width: 667px) {
    font-size: 20px;
  }
  }

  p {
    font-size: 11px;

    color: white;

    margin-top: 5px;
    @media (max-width: 667px) {
    font-size: 9px;
  }
  }
`;
