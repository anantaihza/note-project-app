import { useState } from "react";
import PropTypes from "prop-types";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { navbar } from "../utils/contentLocale";

export default function DropdownAkun({ logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const {locale} = useLocale();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`flex items-center focus:outline-none ${theme}-text`} 
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <IoIosArrowDown size="1.3rem" />
        ) : (
          <HiOutlineUserCircle size="1.3rem" />
        )}
      </button>
      {isOpen && (
        <div className={`origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-acrylic ${theme}-solid`}>
          <div className="py-1">
            <button
              className={`block px-8 py-2 text-sm hover:${theme}-solid ${theme}-text`} 
              onClick={logout}
            >
              <MdLogout className="inline" /> {navbar[locale].logout}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

DropdownAkun.propTypes = {
  logout: PropTypes.func.isRequired,
};
