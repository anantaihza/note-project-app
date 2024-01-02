import PropTypes from "prop-types";

export default function Decoration({ position }) {
  return (
    <>
    <div>
    {position === "right" ? (
        <img
          src="/Ellipse.svg"
          alt="circle"
          className="absolute right-[-200px] top-[-100px] md:right-[-350px] md:top-[-300px] z-[-9999] max-w-full"
        />
      ) : (
        <img
          src="/Ellipse.svg"
          alt="circle"
          className="absolute left-[-200px] bottom-[-200px] md:left-[-300px] md:bottom-[-300px] z-[-9999] max-w-full"
        />
      )}
    </div>
      
    </>
  );
}

Decoration.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
};
