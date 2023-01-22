import { useContext } from 'react'
import styled from 'styled-components'

//images
import bgDesktopDark from "../assets/bgDesktopDark.jpg"
import bgDesktopLight from "../assets/bgDesktopLight.jpg"
import { ThemeContext } from '../contexts/ThemeContext'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeroImage = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <Wrapper style={{backgroundImage: `url(${isDarkTheme ? bgDesktopDark : bgDesktopLight})`}} />
  )
}

export default HeroImage