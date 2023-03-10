import styled from 'styled-components'

export const Container = styled.div`
  height: 406px;
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Oswald, 'sans-serif';

  padding-left: 16px;
  width: 100%;
  height: 61px;
  font-size: 29px;
  border-bottom: solid 1px #484848;
`;

export const TagsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 345px;
  padding-top: 22px;
  padding-left: 16px;
  gap: 13px 0px;
  letter-spacing: 1.5px;
  font-family: Lato, 'sans-serif';
`;