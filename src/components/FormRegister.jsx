import PropTypes from "prop-types";
import { LuMail } from "react-icons/lu";
import { BiKey } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import InputField from "./InputField";
import ButtonSubmit from "./ButtonSubmit";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { register } from "../utils/contentLocale";
import useInput from "../hooks/useInput";

export default function FormRegister({ onRegister }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [passwordConfirm, onPasswordConfirmChange] = useInput("");
  const { theme } = useTheme();
  const { locale } = useLocale();

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("Password tidak sama");
    } else {
      onRegister({ name, email, password });
    }
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-stretch min-h-screen w-full sm:px-4 md:pl-14 xl:pl-36 ${theme}-text`}
      >
        <h1 className="text-5xl font-bold mb-20 text-center">
          {" "}
          {register[locale].header}
          <br /> {register[locale].subHeader}
        </h1>
        <form className="flex flex-col gap-6" onSubmit={onFormSubmitHandler}>
          <InputField
            name="name"
            label={register[locale].fieldName}
            type="text"
            icon={<FaRegAddressCard size="1rem" className="text-gray-400" />}
            value={name}
            onChange={onNameChange}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            icon={<LuMail size="1rem" className="text-gray-400" />}
            value={email}
            onChange={onEmailChange}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            icon={<BiKey size="1rem" className="text-gray-400" />}
            value={password}
            onChange={onPasswordChange}
          />
          <InputField
            name="password-confirm"
            label={register[locale].fieldKonfirm}
            type="password"
            icon={<MdPassword size="1rem" className="text-gray-400" />}
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
          />

          <ButtonSubmit btnName={register[locale].btnRegister} />
        </form>
      </div>
    </>
  );
}

FormRegister.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
