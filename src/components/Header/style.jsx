import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;

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

    /* transform: rotate(180deg); */

    transform: ${props => props.clicked? "rotate(180deg)":""};

    transition: all linear .5s;
  }

  @media(max-width: 600px) {
    input {
      display: none;
    }
  }
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 47px;
    background-color: ${props => props.clicked ? "#171717" : "#151515"};
    border-radius: 0px 0px 0px 50px;
    position: absolute;
    top: ${props => props.clicked ? "72px" : "25px"};
    right: 0px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    
    transition: all linear .5s;
    z-index: -1;
    
    p{
      text-decoration: none;
      color: ${props => props.clicked ? "white" : "#151515"};
      cursor: pointer;
    }

`