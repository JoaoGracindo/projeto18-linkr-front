import styled from "styled-components";

export default function TagName({ name }) {
    return <StyledTag>{name}</StyledTag>;
  }
  
  const StyledTag = styled.p`
    color: white;
    font-size: 19px;
    font-weight: 700;
    margin: 0px;
    letter-spacing: 2%;
  `;