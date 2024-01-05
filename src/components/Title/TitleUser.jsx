import PropTypes from "prop-types";
export default function TitleUser({ name }) {
  return (
    <div className="base-container mt-10 text-right">
      <h5 className="text-lg font-medium">Hallo,</h5>
      <h2 className="text-4xl font-bold">{name}</h2>
    </div>
  );
}

TitleUser.propTypes = {
  name: PropTypes.string.isRequired,
};
