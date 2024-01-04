import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { LuMail } from "react-icons/lu";
import { BiKey } from "react-icons/bi";
import InputField from "./InputField";
import ButtonSubmit from "./ButtonSubmit";

export default function FormLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onLogin({ email, password })
  }

  return (
    <>
      <div className=" flex flex-col justify-center items-stretch min-h-screen w-full sm:px-4 md:pl-14 xl:pl-36">
        <h1 className="text-5xl font-bold mb-20 text-center">Login <br /> Catatan App</h1>
        <form className="flex flex-col gap-6" onSubmit={onFormSubmitHandler}>
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

          <ButtonSubmit btnName="Login" />
        </form>
        <br />
        <p className="text-center">
          Belum punya akun?{" "}
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
}