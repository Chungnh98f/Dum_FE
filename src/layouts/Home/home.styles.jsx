import styled from "styled-components";

export const HomeContainer = styled.div`
  & .header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    height: 64px;
  }
  & .home-content {
    margin-top: 25px;
  }
  & .logo {
    height: 64px;
    padding: 0;
    margin-top: -3px;
  }
`;
