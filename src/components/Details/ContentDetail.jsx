import PropTypes from "prop-types";
import generateDate from "../../utils/generateDate";
import parse from 'html-react-parser';

export default function ContentDetail({ note }) {
  return (
    <div className="base-container">
      <div className="bg-acrylic shadow-lg p-8 rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-bold">{note.title}</h2>
        <p className="text-lg text-[#219BFF] mt-3">
          {generateDate(note.createdAt)}
        </p>
        <p className="tex-lg mt-6 max-h-[250px] md:max-h-[300px] lg:max-h-[500px] overflow-auto">
          {parse(note.body)}
        </p>
      </div>
    </div>
  );
}

ContentDetail.propTypes = {
  note: PropTypes.object.isRequired,
};
