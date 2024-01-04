import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/components/navbar.css";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import DropdownAkun from "./DropdownUser";

export default function Navbar({ logout }) {
  return (
    <nav className="fixed-top bg-acrylic shadow-sm">
      <div className="base-container flex items-center justify-between">
        <div className="flex items-center justify-between gap-8 h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Notes
          </Link>
          <div className="flex space-x-4 text-gray-900">
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ToggleLocale locale="id" />
          <ToggleTheme theme="light" />
          <div> | </div>
          <DropdownAkun logout={logout} />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
}