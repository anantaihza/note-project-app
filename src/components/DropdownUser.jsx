import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownAkun({ logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <IoIosArrowDown size="1.3rem" />
        ) : (
          <HiOutlineUserCircle size="1.3rem" />
        )}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-acrylic ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={logout}
            >
              <MdLogout className="inline" /> Sign out
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
