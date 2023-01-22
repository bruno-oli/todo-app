import { createContext, ReactNode, useState } from "react";

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
  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
