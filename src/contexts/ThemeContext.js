import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };
