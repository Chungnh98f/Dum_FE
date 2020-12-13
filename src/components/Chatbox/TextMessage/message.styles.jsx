import styled from "styled-components";

export const MessageContainer = styled.div`
  & .justifyStart {
    justify-content: flex-start;
    display: flex;
  }
  & .justifyEnd {
    display: flex;
    justify-content: flex-end;
  }
  & .backgroundBlue {
    background: #2979ff;
  }

  & .backgroundLight {
    background: #f3f3f3;
  }

  & .colorWhite {
    color: white;
  }

  & .colorDark {
    color: #353535;
  }
`;
