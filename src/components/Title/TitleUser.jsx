import PropTypes from "prop-types";
import { useTheme } from "../../contexts/ThemeContext";

export default function TitleUser({ name }) {
  const { theme } = useTheme();
  return (
    <div className={`base-container mt-10 text-right ${theme}-text`}>
      <h5 className="text-lg font-medium">Hallo,</h5>
      <h2 className="text-4xl font-bold">{name}</h2>
    </div>
  );
}

TitleUser.propTypes = {
  name: PropTypes.string.isRequired,
};
