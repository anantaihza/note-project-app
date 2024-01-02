import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
  searchIdNotes,
} from "../utils/local-data";

import Navbar from "../components/Navbar";
import Decoration from "../components/Decoration";
import ButtonList from "../components/Details/ButtonList";
import ContentDetail from "../components/Details/ContentDetail";

export default function DetailNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isIdExist = searchIdNotes(id);

  // Jika id tidak ditemukan
  useEffect(() => {
    if (!isIdExist) {
      navigate("/404");
    }
  }, [isIdExist, navigate]);

  if (!isIdExist) return null;

  const note = getNote(id);
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
      <Navbar />
      <div className="relative overflow-hidden min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <ContentDetail note={note} />
          <ButtonList
            typeBtn={typeButton}
            onArchive={handleArchive}
            onDelete={handleDelete}
            onUnarchive={handleUnarchive}
          />
        </div>

        <Decoration position="right" />
        <Decoration position="left" />
      </div>
    </>
  );
}
