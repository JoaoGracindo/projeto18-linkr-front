import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;

  margin: 55px 0;
  font-family: "Oswald", sans-serif;
  font-size: 43px;
  font-weight: bold;

  color: white;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    margin-inline: 20px;

    object-fit: cover;
  }

  @media (max-width: 950px) {
    justify-content: center;
  }
`;
