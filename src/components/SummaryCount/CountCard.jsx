import PropTypes from "prop-types";
import "../../styles/components/count-card.css";

export default function CountCard({ sum, name, isActive = false }) {
  const cardClass = `card-count ${
    isActive ? "active" : "not-active"
  } shadow-xl text-white`;
  return (
    <>
      <div className={cardClass}>
        <div className="flex justify-center gap-8">
          <h2 className="text-5xl font-semibold">{sum}</h2>
          <h2 className="text-2xl my-auto">{name}</h2>
        </div>
      </div>
    </>
  );
}

CountCard.propTypes = {
  sum: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
