import { useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../../contexts/LocaleContext";

export default function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const storedLocale = localStorage.getItem("locale");
    return storedLocale ? storedLocale : "id";
  });

  const toggleLocale = () => {
    try {
      const changeLocale = locale === "id" ? "en" : "id";
      setLocale(changeLocale);
      localStorage.setItem("locale", changeLocale);
    } catch (error) {
      console.error("Error setting locale:", error);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
