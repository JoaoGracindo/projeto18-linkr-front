import styled from "styled-components"

export const StyledPost = styled.div`
  width: 611px;
  height: fit-content;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  font-family: Lato, 'sans-serif';
  color: white;
  @media (max-width: 375px){
      min-height: 232px;
      max-height: fit-content;
      width: 100vw;
    }
  @media (max-width: 375px) {
    width: 100vw;
    border: none;
    border-radius: 0px;
  }
  .user-img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 17px;
      @media (max-width: 375px) {
        width: 40px;
        height: 40px;
  }
    }
  .leftContainer{
    width: 86px;
    height: 276px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    @media (max-width: 375px) {
     width: 70px;
      height: 100%;
  }
  }
  .rightWrapper{
    width: 503px;
    height: 100%;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    @media (max-width: 375px) {
      width: 288px;
      
  }
  }
  .nameContainer{
    width: 100%;
    height: 23px;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 19px;
    @media (max-width: 667px) {
      margin-top: 10px;
  }
  }
  .post-options{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    @media (max-width: 667px) {
      display: none;
  }
  }
  .contentContainer{
    width: 100%;
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    gap: 10px 0px;
    @media (max-width: 375px){
      height: 190px;
    }
  }
  .description{
    box-sizing: border-box;
    width: 100%;
    min-height: 20px;
    max-height: fit-content;
    word-break: break-all;
    border-radius: 7px;
    color: #B7B7B7;

  }
  .link{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 155px;
    background-color: inherit;
    margin-bottom: 20px;
    border-radius: 11px;
    border: 1px solid #4D4D4D;
    position: relative;
    @media (max-width: 375px){
      height: 115px;
      margin-bottom: 0px;
    }
  }
  
  .metadata-img{
    box-sizing:border-box;
    position: absolute;
    top: -1px;
    right: -1px;
    background-color: blue;
    width: 155px;
    height: 155px;
    border-radius: 0px 11px 11px 0px;
    border: none;
    z-index: 1;
    @media (max-width: 375px){
      width: 95px;
      height: 115px;
    }
  }
  .metadata-text{
    width: 348px;
    height: 155px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 23px 24px 19px;
    @media (max-width: 375px){
      height: 110px;
      width: 175px;
      padding: 0px;
      margin-left: 10px;
    }
  }
  .metadata-title{
    box-sizing: border-box;
    width: 100%;
    min-height: 38px;
    color: #CECECE;
    font-size: 16px;
    white-space: normal;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow-y: hidden;
    @media (max-width: 375px){
      font-size: 11px;
      min-height: 26px;
    }
  }
  .metadata-description{
    font-size: 11px;
    height: 40px;
    color: #9B9595;
    display: flex;
    align-items: flex-start;
    @media (max-width: 375px){
      font-size: 9px;
    }
  }
  .metadata-url{
    min-height: 13px;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 11px;
    color: #CECECE;
    padding-top: 13.6px;
    a{
      color: inherit;
      text-decoration: none;
    }
    a:link:active, a:visited:active {
      color: none;
    }
    @media (max-width: 375px){
      font-size: 9px;
    }
  }
`