import Decoration from "../components/Decoration";
import FormLogin from "../components/FormLogin";

// import { useNavigate } from "react-router-dom";

export default function Login() {
  // const navigate = useNavigate();

  //   const onSubmitClose = () => {
  //     navigate("/")
  //   }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="base-container flex">
        <img
          src="/login.svg"
          className="hidden md:block w-[45%] lg:w-[45%]"
          alt="Login"
        />
        <FormLogin />
      </div>

      <Decoration position="right" />
      <Decoration position="left" />
    </div>
  );
}
