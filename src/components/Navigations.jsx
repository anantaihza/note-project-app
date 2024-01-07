import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";

export default function Navigations() {
  return (
    <nav className="fixed-top">
      <div className="base-container flex items-center justify-end">
        <div className="flex items-center gap-4 h-16">
          <ToggleLocale locale="id" />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
