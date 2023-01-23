import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.194444px;
    color: ${props => props.theme.colors.filterItemsColor};
  }
`;

const DragMessage = () => {
  return (
    <Wrapper>
      <span>Drag and drop to reorder list</span>
    </Wrapper>
  );
};

export default DragMessage;
