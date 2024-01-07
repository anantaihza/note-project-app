import "../../styles/components/button-detail.css";
import PropTypes from "prop-types";
import { useLocale } from "../../contexts/LocaleContext";
import { btnDelete, btnArchive, btnActive } from "../../utils/contentLocale";

export default function ButtonDetail({ typeBtn, onAction }) {
  const { locale } = useLocale();

  if (typeBtn === "arsipkan") {
    return (
      <button className="btn bg-[#219BFF] text-white" onClick={onAction}>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          <span className="desc-btn">{btnArchive[locale].archive}</span>
        </div>
      </button>
    );
  } else if (typeBtn === "hapus") {
    return (
      <button className="btn bg-[#219BFF] text-white" onClick={onAction}>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <span className="desc-btn">{btnDelete[locale].delete}</span>
        </div>
      </button>
    );
  } else if (typeBtn === "aktifkan") {
    return (
      <button className="btn bg-[#219BFF] text-white" onClick={onAction}>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>

          <span className="desc-btn">{btnActive[locale].active}</span>
        </div>
      </button>
    );
  }
}

ButtonDetail.propTypes = {
  typeBtn: PropTypes.oneOf(["arsipkan", "hapus", "aktifkan"]).isRequired,
  onAction: PropTypes.func.isRequired,
};
