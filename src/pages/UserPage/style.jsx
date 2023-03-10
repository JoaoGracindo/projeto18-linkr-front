import styled from "styled-components";

export const UserPageContainer = styled.div`
  width: 935px;

  margin: 150px auto;

  > input {
    display: none;
  }

  @media (max-width: 950px) {
    width: 100vw;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      height: 45px;
      width: 90%;

      font-size: 17px;

      padding-left: 10px;

      border: none;
      border-radius: 5px;

      display: block;

      margin: 20px 0;
    }

    input::placeholder {
      font-style: italic;
      color: #868686;
    }

    input:focus {
      outline: none;
    }
  }
`;
