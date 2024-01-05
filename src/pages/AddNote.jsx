import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import Decoration from "../components/Decoration";
import PropTypes from "prop-types";
import { addNote } from "../utils/network-data";

export default function AddNote({ logout }) {
  const navigate = useNavigate();

  const onAddSubmitHandler = async (note) => {
    const { error } = await addNote(note);
    if (!error) {
      navigate(-1);
      alert("Catatan Berhasil ditambahkan");
    }
  };

  return (
    <>
      <Navbar logout={logout} />
      <div className="relative overflow-hidden min-h-screen">
        <FormAdd onAddSubmit={onAddSubmitHandler} />

        <Decoration position="right" />
        <Decoration position="left" />
      </div>
    </>
  );
}

AddNote.propTypes = {
  logout: PropTypes.func.isRequired,
};
