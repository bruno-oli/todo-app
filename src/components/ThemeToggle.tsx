import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

//icons
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";

const Wrapper = styled.img`
  cursor: pointer;
`;

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  return (
    <Wrapper
      style={{filter: `${isDarkTheme ? "invert(100%)" : "invert(0%)"}`}}
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      src={`${isDarkTheme ? iconSun : iconMoon}`}
      alt=""
    />
  );
};

export default ThemeToggle;
