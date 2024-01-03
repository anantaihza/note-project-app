import PropTypes from "prop-types";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ToggleTheme({ theme }) {
  return (
    <button>
      {theme === "light" ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
}
