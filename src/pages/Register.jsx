import Decoration from "../components/Decoration";
import FormRegister from "../components/FormRegister";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import Navigations from "../components/Navigations";

export default function Register() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/")
      alert("Registrasi Berhasil, Silahkan login");
    }
  };
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Navigations />
      <div className="base-container flex">
        <img
          src="/register.svg"
          className="hidden md:block w-[45%] lg:w-[45%]"
          alt="Login"
        />
        <FormRegister onRegister={onRegisterHandler} />
      </div>

      <Decoration position="right" />
      <Decoration position="left" />
    </div>
  );
}
