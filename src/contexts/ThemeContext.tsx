import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextProps = {
  children: ReactNode;
};

type ThemeContextType = {
  isDarkTheme: boolean;
  setIsDarkTheme: (newState: boolean) => void;
};

const initialValue = {
  isDarkTheme: false,
  setIsDarkTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialValue);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialValue.isDarkTheme);
  const [isLoading, setIsLoading] = useState(true);

  // * Get theme from local storage
  useEffect(() => {
    function getTheme() {
      if (localStorage.getItem("theme")) {
        setIsDarkTheme(
          JSON.parse(
            localStorage.getItem("theme") || `${initialValue.isDarkTheme}`
          )
        );
      }
      setIsLoading(false);
    }
    getTheme();
  }, []);

  // * Set theme in local storage
  useEffect(() => {
    function setTheme() {
      if (isLoading === false) {
        localStorage.setItem("theme", JSON.stringify(isDarkTheme));
      }
    }
    setTheme();
  }, [isDarkTheme]);
  
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
