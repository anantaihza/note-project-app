import Decoration from "../components/Decoration";
import FormLogin from "../components/FormLogin";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

export default function Login({ loginSuccess }) {
  const navigate = useNavigate();

    const onLoginHandler = async (user) => {
      const { error, data } = await login(user)

      if (!error) {
        loginSuccess(data)
      }
      navigate("/")
    }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="base-container flex">
        <img
          src="/login.svg"
          className="hidden md:block w-[45%] lg:w-[45%]"
          alt="Login"
        />
        <FormLogin onLogin={onLoginHandler} />
      </div>

      <Decoration position="right" />
      <Decoration position="left" />
    </div>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
