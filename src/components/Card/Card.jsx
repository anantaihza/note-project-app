import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import generateDate from "../../utils/generateDate";
import parse from "html-react-parser";
import { useTheme } from "../../contexts/ThemeContext";

export default function Card({ note }) {
  const { theme } = useTheme();
  return (
    <div className={`bg-acrylic shadow-lg p-8 rounded-lg h-60 ${theme}-solid`}>
      <p className="text-sm text-[#219BFF] mb-1">
        {generateDate(note.createdAt)}
      </p>
      <Link
        to={`/detail/${note.id}`}
        className={`text-xl font-bold ${theme}-text`}
      >
        {note.title}
      </Link>
      <p className={`line-clamp-4 mt-4 text-sm ${theme}-text`}>
        {parse(note.body)}
      </p>
    </div>
  );
}

Card.propTypes = {
  note: PropTypes.object.isRequired,
};
