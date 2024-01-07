import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import DropdownAkun from "./DropdownUser";
import "../styles/components/navbar.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar({ logout }) {
  const { theme } = useTheme();
  return (
    <nav className="fixed-top bg-acrylic shadow-sm">
      <div className="base-container flex items-center justify-between">
        <div className="flex items-center justify-between gap-8 h-16">
          <Link to="/" className={`text-2xl font-bold ${theme}-text`}>{/* sini */}
            Notes
          </Link>
          <div className={`flex space-x-4 ${theme}-text`}>{/* sini */}
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ToggleLocale locale="id" />
          <ToggleTheme />{/* sini */}
          <div className={`${theme}-text`}> | </div>{/* sini */}
          <DropdownAkun logout={logout} />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
}