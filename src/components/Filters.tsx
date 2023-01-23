import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FiltersContext } from "../contexts/FiltersContext";

const Wrapper = styled.div`
  display: flex;
  gap: 19px;
  button {
    cursor: pointer;
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    background: none;
    border: none;
    outline: none;

    color: ${(props) => props.theme.colors.filterItemsColor};

    :hover {
      color: ${(props) => props.theme.colors.taskNameColor};
    }
    &.active {
      color: ${(props) => props.theme.colors.filterActiveItemColor};
    }
  }
`;

const Filters = () => {
  const {
    filterActive,
    filterAll,
    filterCompleted,
    setFilterActive,
    setFilterAll,
    setFilterCompleted,
  } = useContext(FiltersContext);
  return (
    <Wrapper>
      <button
        className={`${filterAll ? "active" : ""}`}
        onClick={() => {
          if (filterAll === false) {
            setFilterAll(!filterAll);
            setFilterActive(false);
            setFilterCompleted(false);
          }
        }}
      >
        All
      </button>
      <button
        className={`${filterActive ? "active" : ""}`}
        onClick={() => {
          if (filterActive === false) {
            setFilterActive(!filterActive);
            setFilterAll(false);
            setFilterCompleted(false);
          }
        }}
      >
        Active
      </button>
      <button
        className={`${filterCompleted ? "active" : ""}`}
        onClick={() => {
          if (filterCompleted === false) {
            setFilterCompleted(!filterCompleted);
            setFilterAll(false);
            setFilterActive(false);
          }
        }}
      >
        Completed
      </button>
    </Wrapper>
  );
};

export default Filters;
