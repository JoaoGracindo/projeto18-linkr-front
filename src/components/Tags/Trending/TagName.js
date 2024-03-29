import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TagName({ tag }) {
    const navigate = useNavigate()
    return <StyledTag onClick={() => navigate(`/hashtags/${tag}`)}>{"# " + tag}</StyledTag>;
  }
  
  const StyledTag = styled.p`
    color: white;
    font-size: 19px;
    font-weight: 700;
    margin: 0px;
    letter-spacing: 2%;
  `;