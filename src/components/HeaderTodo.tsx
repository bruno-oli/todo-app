import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  h1 {
    color: ${props => props.theme.colors.bodyBackground};
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
  }
`;

const HeaderTodo = () => {
  return (
    <Wrapper>
      <h1>TODO</h1>
      <ThemeToggle />
    </Wrapper>
  );
};

export default HeaderTodo;
