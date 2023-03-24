import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 950px) {
    justify-content: center;
  }
`;

export const FeedWrapper = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
gap: 16px 0px
`
