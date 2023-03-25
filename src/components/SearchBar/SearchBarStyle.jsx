import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 40%;
  height: 45px;

  position: relative;
  z-index: 2;

  input {
    width: 100%;
    height: 100%;

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

  svg {
    font-size: 25px;

    color: #868686;

    position: absolute;
    top: 10px;
    right: 5px;
  }

  @media(max-width: 600px) {
    width: 95%;
  }
`;

export const SearchBarResults = styled.div`
  width: 100%;

  background-color: #e7e7e7;

  border-radius: 8px;

  padding: 45px 15px 15px 15px;

  display: ${(props) => (props.displayResult ? "block" : "none")};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  a {
    text-decoration: none;
  }

  > p {
    font-family: "Lato", sans-serif;
    font-size: 19px;

    color: #515151;

    margin-top: 15px;
  }
`;

export const SearchBarUserContainer = styled.div`
  width: 100%;
  height: 40px;

  margin-top: 15px;

  display: flex;
  align-items: center;

  img {
    width: 40px !important;
    height: 40px !important;

    border-radius: 50%;

    object-fit: cover;
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 19px;

    color: #515151;

    margin-left: 10px;
  }
`;
