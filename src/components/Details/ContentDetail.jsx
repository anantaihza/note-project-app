import PropTypes from "prop-types";
import generateDate from "../../utils/generateDate";
import parse from "html-react-parser";
import { useTheme } from "../../contexts/ThemeContext";

export default function ContentDetail({ note }) {
  const { theme } = useTheme();
  const bodyContent = note.body ? note.body : "";
  
  return (
    <div className="base-container">
      <div className={`bg-acrylic shadow-lg p-8 rounded-2xl ${theme}-solid ${theme}-text`}>
        <h2 className="text-4xl md:text-5xl font-bold">{note.title}</h2>
        <p className="text-lg text-[#219BFF] mt-3">
          {note.createdAt && generateDate(note.createdAt)}
        </p>
        <p className="tex-lg mt-6 max-h-[250px] md:max-h-[300px] lg:max-h-[500px] overflow-auto">
          {parse(bodyContent)}
        </p>
      </div>
    </div>
  );
}

ContentDetail.propTypes = {
  note: PropTypes.object.isRequired,
};
