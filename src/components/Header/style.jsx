import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 72px;
  width: 100vw;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;

  background-color: #151515;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 30px;

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

    transition: all linear .2s;

    transform: ${props => props.clicked ? "rotate(180deg)" : ""};
  }

  @media(max-width: 600px) {
    .searchBar {
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
    
    transition: all linear .2s;
    z-index: -1;
    
    p{
      text-decoration: none;
      color: ${props => props.clicked ? "white" : "#151515"};
      cursor: pointer;
    }

`