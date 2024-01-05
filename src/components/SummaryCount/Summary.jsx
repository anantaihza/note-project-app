import PropTypes from "prop-types";
import CountCard from "./CountCard";

export default function Summary({ activeCard, countActive, countArchived }) {
  return (
    <div className="base-container my-14">
      <div className="flex gap-8 ">
        {activeCard === "aktif" ? <CountCard sum={countActive} name="Aktif" isActive={true} /> : <CountCard sum={countActive} name="Aktif" />}
        {activeCard === "arsip" ? <CountCard sum={countArchived} name="Arsip" isActive={true} /> : <CountCard sum={countArchived} name="Arsip" />}
      </div>
    </div>
  );
}
Summary.propTypes = {
    activeCard : PropTypes.oneOf(["aktif","arsip"]).isRequired,
    countActive : PropTypes.number.isRequired,
    countArchived : PropTypes.number.isRequired,
}