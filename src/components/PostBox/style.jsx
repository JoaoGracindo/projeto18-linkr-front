import styled from "styled-components";

export const PostBoxContainer = styled.div`
  width: 611px;

  font-family: "Lato", sans-serif;

  background-color: #151515;

  border-radius: 16px;

  margin-bottom: 15px;
  padding: 15px 15px 15px 0;

  display: flex;
  justify-content: space-between;

  @media (max-width: 667px) {
    width: 100vw;
  }
`;

export const PostInfoContainer = styled.div`
  width: 90px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    margin-inline: 20px;

    object-fit: cover;
  }
`;

export const PostContentContainer = styled.div`
  width: 100%;
  height: 100%;
  

  h3 {
    font-family: "Lato", sans-serif;
    font-size: 19px;

    color: white;

    margin-bottom: 10px;
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 17px;

    color: #b7b7b7;

    margin-bottom: 10px;
  }
`;
