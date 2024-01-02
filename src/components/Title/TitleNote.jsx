import PropTypes from "prop-types";
import TitleActive from "./NoteActive/TitleActive";
import TitleArchive from "./NoteArchive/TitleArchive";


export default function TitleNote({ statusNote }) {
  return (
    <div className="base-container flex justify-between">
      {statusNote === "aktif" ? <TitleActive /> : <TitleArchive />}
    </div>
  );
}

TitleNote.propTypes = {
  statusNote: PropTypes.oneOf(["aktif", "arsip"]).isRequired,
};
