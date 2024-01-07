import PropTypes from "prop-types";
import { useTheme } from "../contexts/ThemeContext";

export default function Search({ setSearch, onParam }) {
  const { theme } = useTheme();
  const onSearchHandler = (event) => {
    const title = event.target.value;
    setSearch(title);
    onParam(title);
  };

  return (
    <div className="base-container my-9">
      <input
        type="text"
        className={`px-10 py-3 rounded-lg w-full focus:outline-[#219BFF] bg-acrylic shadow-lg ${theme}-solid ${theme}-text`}
        placeholder="Search..."
        onChange={onSearchHandler}
      />
    </div>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  onParam: PropTypes.func.isRequired,
};
