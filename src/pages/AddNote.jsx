import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import Decoration from "../components/Decoration";
import PropTypes from "prop-types";

export default function AddNote({ logout }) {
  const navigate = useNavigate();

  const onSubmitClose = () => {
    navigate(-1)
  }

  return (
    <>
        <Navbar logout={logout} />
        <div className="relative overflow-hidden min-h-screen">
            <FormAdd onSubmitClose={onSubmitClose} />
            
            <Decoration position="right" />
            <Decoration position="left" />
        </div>
    </>
  )
}

AddNote.propTypes = {
  logout: PropTypes.func.isRequired,
}