import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 85vh;
  & .user-list {
    width: 200px;
  }
  & .mainboard {
    flex: 1;
    height: 100%;
  }
  & .main-action {
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & .button {
      font-weight: 450;
      font-size: 4vmin;
      appearance: none;
      background: linear-gradient(to bottom, #f46001, #e14802);
      border: none;
      color: #fff;
      border-radius: 2em;
      padding: 0.6em 1.5em;
      overflow: hidden;
      user-select: none;
      cursor: pointer;
      z-index: 1;
      box-shadow: 0 0 1em rgba(white, 0.2);
      transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1), box-shadow 0.2s;

      &:hover {
        box-shadow: 0 0 2em rgba(white, 0.3);
      }

      outline: none;

      &:active {
        transform: scale(0.8) translateY(10%);
        transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
      }
    }
  }
`;
