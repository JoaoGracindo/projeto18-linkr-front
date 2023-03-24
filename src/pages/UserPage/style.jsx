import styled from "styled-components";

export const UserPageContainer = styled.div`
  width: 935px;

  margin: 150px auto;

  .searchBar {
    display: none;
  }

  > input {
    display: none;
  }

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-weight: bold;

    color: white;
  }

  @media (max-width: 950px) {
    width: 100vw;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .searchBar {
      display: block;
    }

    input {
      height: 45px;
      width: 100%;

      font-size: 17px;

      padding-left: 10px;

      border: none;
      border-radius: 5px;

      display: block;
    }

    input::placeholder {
      font-style: italic;
      color: #868686;
    }

    input:focus {
      outline: none;
    }

    h1 {
      font-size: 50px;
    }
  }
`;
