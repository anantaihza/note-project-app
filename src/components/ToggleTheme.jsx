import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../contexts/ThemeContext";

export default function ToggleTheme() {
  const {theme, toggleTheme } = useTheme();
  console.log(theme)

  return (
    <button className={`${theme}-text`} onClick={toggleTheme}>
      {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
    </button>
  );
}