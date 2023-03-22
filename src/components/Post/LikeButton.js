import { useContext, useState } from "react";
import { VscHeartFilled, VscHeart } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import { TokenContext } from "../../context/UserContext";
import apiLikes from "../../services/apiLikes";

export default function LikeButton({ post_id, likersNames, likesCount, liked }) {
  const [localLiked, setLiked] = useState(liked);
  const [localLikesCount, setLikesCount] = useState(likesCount)
  const token = JSON.parse(localStorage.token);
  
  async function postLike( token, post_id ) {
    await apiLikes
      .postLike(token, post_id)
      .then((res) => {
        setLiked(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  async function deleteLike( token, post_id ) {
    await apiLikes
      .deleteLike(token, post_id)
      .then((res) => {
        setLiked(false);
      })
      .catch((err) => {
        console.log(err.response);
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
    color: localLiked ? "red" : "white",
  };
  let tooltipText = ""
  function handleTooltipText(){
    if(localLiked){
      tooltipText += "Você"
      if(localLikesCount === 2) tooltipText += ` e ${likersNames[0]}` 
      if(localLikesCount >= 2) tooltipText += `, ${likersNames[0]} e outras ${localLikesCount - 2} pessoas` 
    }
    if(!localLiked && localLikesCount >= 1){
      tooltipText = `${likersNames[0]}`
      if(localLikesCount === 2) tooltipText += ` e ${likersNames[1]}` 
      if(localLikesCount >= 2) tooltipText += `, ${likersNames[1]} e outras ${likesCount - 2} pessoas` 
    }
  }


  function handleLikesCount(likesCount){
    let likesCountText = likesCount ? likesCount.toString() : "0"
    if(likesCount > 9999) likesCountText = (Math.floor((likesCount/1000))).toString() + "mil"
    if(likesCount > 999999) likesCountText = (Math.floor((likesCount/1000000))).toString() + "m"
    if(likesCount > 999999999) likesCountText = (Math.floor((likesCount/1000000000))).toString() + "bi"
    return likesCountText
  }

  
  handleTooltipText()
  return (
    <Container>
      {localLiked ? (
        <VscHeartFilled
          style={heartStyled}
          data-tooltip-id="like-tooltip"
          data-tooltip-content={tooltipText}
          onClick={() => {
            setLiked(!localLiked)
            setLikesCount(localLikesCount-1)
            handleTooltipText()
            deleteLike( token, post_id );
          }}
        />
      ) : (
        <VscHeart
          style={heartStyled}
          data-tooltip-id="like-tooltip"
          data-tooltip-content={tooltipText}
          onClick={() => {
            setLiked(!localLiked)
            setLikesCount(localLikesCount+1)
            handleTooltipText()
            postLike( token, post_id );
          }}
        />
      )}
      <p>{handleLikesCount(localLikesCount)} likes</p>
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

    @media (max-width: 375px) {
    font-size: 20px;
  }
  }

  p {
    font-size: 11px;

    color: white;

    margin-top: 5px;
    @media (max-width: 375px) {
    font-size: 9px;
  }
  }
`;
