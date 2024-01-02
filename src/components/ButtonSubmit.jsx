import PropTypes from "prop-types";
import "../styles/components/button-submit.css";

export default function ButtonSubmit({ btnName }) {
  return (
    <>
        <button type="submit" className="btn-submit text-white bg-[#219BFF]">{btnName}</button>
    </>
  )
}

ButtonSubmit.propTypes = {
  btnName: PropTypes.string.isRequired,
}