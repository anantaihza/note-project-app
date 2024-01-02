import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import Decoration from "../components/Decoration";


export default function AddNote() {
  const navigate = useNavigate();

  const onSubmitClose = () => {
    navigate(-1)
  }

  return (
    <>
        <Navbar />
        <div className="relative overflow-hidden min-h-screen">
            <FormAdd onSubmitClose={onSubmitClose} />
            
            <Decoration position="right" />
            <Decoration position="left" />
        </div>
    </>
  )
}
