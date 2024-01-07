import PropTypes from "prop-types";
import { useTheme } from "../contexts/ThemeContext";

export default function InputField({ name, label, type, icon, value, onChange }) {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-row-reverse items-stretch w-full h-14 rounded-xl overflow-hidden bg-acrylic shadow-md ${theme}-solid`}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        value={value}
        onChange={onChange}
        className={`block bg-transparent w-full p-3 focus:outline-none ${theme}-text`}
      />
      <div className="flex items-center pl-3 py-3">{icon}</div>
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
