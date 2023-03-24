import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .posts{
    gap: 10px 10px;
  }

  @media (max-width: 950px) {
    justify-content: center;
  }
`;
