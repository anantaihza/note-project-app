import PropTypes from "prop-types";

export default function ToggleLocale({ locale }) {
  return (
    <button>
      {locale === "id" ? (
        <img
          src="/En.png"
          alt="https://www.flaticon.com/free-icons/united-states"
          className="w-[17px]"
        />
      ) : (
        <img
          src="/In.png"
          alt="https://www.flaticon.com/free-icons/indonesia"
          className="w-[17px]"
        />
      )}
    </button>
  );
}

ToggleLocale.propTypes = {
  locale: PropTypes.oneOf(["id", "en"]).isRequired,
};

