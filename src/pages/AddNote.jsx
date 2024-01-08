import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import Decoration from "../components/Decoration";

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
