import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const storedTheme = localStorage.getItem("theme");
//     return storedTheme ? storedTheme : "light";
//   });

//   const toggleTheme = () => {
//     try {
//       const changeTheme = theme === "light" ? "dark" : "light";
//       setTheme(changeTheme);
//       localStorage.setItem("theme", changeTheme);
//     } catch (error) {
//       console.error("Error setting theme:", error);
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
