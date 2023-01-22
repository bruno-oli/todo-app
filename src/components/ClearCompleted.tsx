import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  letter-spacing: -0.194444px;
  color: ${(props) => props.theme.colors.filterItemsColor};
  :hover {
    color: ${(props) => props.theme.colors.taskNameColor};
  }
`;

const ClearCompleted = () => {
  return <Wrapper>Clear Completed</Wrapper>;
};

export default ClearCompleted;
