import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../styles/components/form-add.css";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { formAdd, btnAdd } from "../utils/contentLocale";
import useInput from "../hooks/useInput";

export default function FormAdd({ onAddSubmit }) {
  const { theme } = useTheme();
  const { locale } = useLocale();
  const [title, onTitleChangeHandler] = useInput("");
  const [body, setBody] = useState(formAdd[locale].body);

  useEffect(() => {
    setBody(formAdd[locale].body);
  }, [locale]);

  const onBodyChangeHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (
      body === "Apa yang kamu fikirkan?" ||
      body === "What are you thinking?"
    ) {
      onAddSubmit({ title, body: "(Tidak ada catatan)" });
    } else {
      onAddSubmit({ title, body });
    }
  };

  return (
    <div className="base-container flex justify-center items-center min-h-screen">
      <form className={`w-full ${theme}-text`} onSubmit={onFormSubmitHandler}>
        <input
          className="w-full text-5xl font-bold py-2 px-4 mb-2 border-b-0 bg-transparent border-gray-400 outline-none focus:border-[#219BFF] focus:border-b-2"
          type="text"
          placeholder={formAdd[locale].title}
          value={title}
          onChange={onTitleChangeHandler}
        />

        <div
          className="outline-none text-xl border-0 border-gray-400 focus:border-[#219BFF] focus:border-2 rounded-lg p-4 h-96 overflow-y-auto"
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: body }}
          onBlur={onBodyChangeHandler}
        />
        <br />

        <div className="base-container relative">
          <button
            className="btn bg-[#219BFF] text-white absolute bottom-[-10] right-0"
            type="submit"
          >
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="desc-btn">{btnAdd[locale].save}</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

FormAdd.propTypes = {
  onAddSubmit: PropTypes.func.isRequired,
};
