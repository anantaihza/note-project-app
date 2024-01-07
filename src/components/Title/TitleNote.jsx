import PropTypes from "prop-types";
import TitleActive from "./NoteActive/TitleActive";
import TitleArchive from "./NoteArchive/TitleArchive";
import { useTheme } from "../../contexts/ThemeContext";

export default function TitleNote({ statusNote }) {
  const { theme } = useTheme();
  return (
    <div className={`base-container flex justify-between ${theme}-text`}>
      {statusNote === "aktif" ? <TitleActive /> : <TitleArchive />}
    </div>
  );
}

TitleNote.propTypes = {
  statusNote: PropTypes.oneOf(["aktif", "arsip"]).isRequired,
};
