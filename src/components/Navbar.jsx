import { Link } from "react-router-dom";

import "../styles/components/navbar.css";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";

export default function Navbar() {
  return (
    <nav className="fixed-top bg-acrylic shadow-sm">
      <div className="base-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Notes
          </Link>
          <div className="flex space-x-4 text-gray-900">
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <div> | </div>
            <ToggleLocale locale="id" />
            <ToggleTheme theme="light" />
          </div>
        </div>
      </div>
    </nav>
  );
}
