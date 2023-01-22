import React, { useContext } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

//themes
import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import HeroImage from "./views/HeroImage";
import TodoContainer from "./views/TodoContainer";
import TodosProvider from "./contexts/TodosContext";

function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HeroImage />
      <TodosProvider>
        <TodoContainer />
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
