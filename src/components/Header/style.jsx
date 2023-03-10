import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 72px;
  width: 100%;

  background-color: #151515;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 30px;

  input {
    height: 45px;
    width: 40%;

    font-size: 20px;

    padding-left: 15px;

    border: none;
    border-radius: 5px;
  }

  input::placeholder {
    font-style: italic;
    color: #868686;
  }

  input:focus {
    outline: none;
  }

  div {
    img {
      width: 53px;
      height: 53px;

      border-radius: 50%;

      object-fit: cover;
    }
  }

  svg {
    font-size: 30px;

    color: white;

    cursor: pointer;

    margin: 0 10px 10px 0;
  }

  @media(max-width: 600px) {
    input {
      display: none;
    }
  }
`;
