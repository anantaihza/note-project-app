import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { LuMail } from "react-icons/lu";
import { BiKey } from "react-icons/bi";
import InputField from "./InputField";
import ButtonSubmit from "./ButtonSubmit";
import { useTheme } from "../contexts/ThemeContext";
import { login } from "../utils/contentLocale";
import { useLocale } from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";

export default function FormLogin({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { theme } = useTheme();
  const { locale } = useLocale();

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onLogin({ email, password });
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-stretch min-h-screen w-full sm:px-4 md:pl-14 xl:pl-36 ${theme}-text`}
      >
        <h1 className="text-5xl font-bold mb-20 text-center">
          Login <br /> {login[locale].header}
        </h1>
        <form className="flex flex-col gap-6" onSubmit={onFormSubmitHandler}>
          <InputField
            name="email"
            label="Email"
            type="email"
            icon={<LuMail size="1rem" className={`${theme}-text`} />}
            value={email}
            onChange={onEmailChange}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            icon={<BiKey size="1rem" className={`${theme}-text`} />}
            value={password}
            onChange={onPasswordChange}
          />

          <ButtonSubmit btnName="Login" />
        </form>
        <br />
        <p className="text-center">
          {login[locale].register}{" "}
          <Link
            to={"/register"}
            className="text-[#219BFF] hover:text-[#20293A]"
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
}

FormLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
