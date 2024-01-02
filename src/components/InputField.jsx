import PropTypes from "prop-types";

export default function InputField({ name, label, type, icon }) {
  return (
    <div className="flex flex-row-reverse items-stretch w-full h-14 rounded-xl overflow-hidden bg-acrylic shadow-md">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        className="block bg-transparent w-full p-3 text-gray-600 focus:outline-none"
      />
      <div className="flex items-center pl-3 py-3 text-gray-600">{icon}</div>
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
