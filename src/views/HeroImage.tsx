import { useContext } from "react";
import styled from "styled-components";

//images
import bgDesktopDark from "../assets/bgDesktopDark.jpg";
import bgMobileDark from "../assets/bgMobileDark.jpg";
import bgDesktopLight from "../assets/bgDesktopLight.jpg";
import bgMobileLight from "../assets/bgMobileLight.jpg";
import { ThemeContext } from "../contexts/ThemeContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 300px;
  div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width:480px) {
    height: 200px;
  }
`;

const HeroImage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  function getBackground() {
    if (isDarkTheme) {
      if (window.screen.width <= 480) {
        return bgMobileDark;
      } else {
        return bgDesktopDark;
      }
    } else {
      if (window.screen.width <= 480) {
        return bgMobileLight;
      } else {
        return bgDesktopLight;
      }
    }
  }
  return (
    <Wrapper>
      <div
        style={{
          backgroundImage: `url(${getBackground()})`,
        }}
      />
    </Wrapper>
  );
};

export default HeroImage;
