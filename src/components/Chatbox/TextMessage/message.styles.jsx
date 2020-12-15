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
    background: #e6e6e6;
  }

  & .colorWhite {
    color: white;
  }

  & .colorDark {
    color: #353535;
  }

  & .marginBottom {
    margin-bottom: 12px;
  }
  & .p-relative {
    position: relative;
  }

  & .p-absolute {
    position: absolute;
  }

  & .w-fit {
    width: fit-content;
    max-width: 300px;
  }

  & .h-fit {
    height: fit-content;
  }

  & p {
    margin-bottom: 0px;
    padding: 10px;
    height: fit-content;
    overflow-wrap: anywhere;
    line-height: 14px;
  }

  & .self-end {
    display: flex;
    place-self: flex-end;
  }

  & .self-start {
    display: flex;
    place-self: flex-start;
  }

  & small {
    position: absolute;
    width: max-content;
    top: -16px;
    color: black;
    font-size: 12px;
    font-weight: 500;
  }

  & .radius-12 {
    border-radius: 12px;
  }
`;
