import Decoration from "../components/Decoration";
import FormRegister from "../components/FormRegister";

export default function Register() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="base-container flex">
        <img
          src="/register.svg"
          className="hidden md:block w-[45%] lg:w-[45%]"
          alt="Login"
        />
        <FormRegister />
      </div>

      <Decoration position="right" />
      <Decoration position="left" />
    </div>
  )
}
