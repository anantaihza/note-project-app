import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import useNoteById from "../hooks/useNoteById";

import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Decoration from "../components/Decoration";
import ButtonList from "../components/Details/ButtonList";
import ContentDetail from "../components/Details/ContentDetail";
import SkeletonDetailNote from "../components/Skeleton/SkeletonDetailNote";

export default function DetailNote({ logout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { note, loading } = useNoteById(id);

  const typeButton = note.archived ? "arsip" : "aktif";

  const handleDelete = () => {
    deleteNote(id);
    navigate(-1);
  };

  const handleArchive = () => {
    archiveNote(id);
    navigate(-1);
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate(-1);
  };

  return (
    <>
      <Navbar logout={logout} />
      <div className="relative overflow-hidden min-h-screen">
        {loading ? (
          <SkeletonDetailNote />
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <ContentDetail note={note} />
            <ButtonList
              typeBtn={typeButton}
              onArchive={handleArchive}
              onDelete={handleDelete}
              onUnarchive={handleUnarchive}
            />
          </div>
        )}

        <Decoration position="right" />
        <Decoration position="left" />
      </div>
    </>
  );
}

DetailNote.propTypes = {
  logout: PropTypes.func.isRequired,
};
