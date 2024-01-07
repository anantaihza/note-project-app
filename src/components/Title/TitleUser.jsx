import PropTypes from "prop-types";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { greeting } from "../../utils/contentLocale";

export default function TitleUser({ name }) {
  const { theme } = useTheme();
  const {locale} = useLocale();
  return (
    <div className={`base-container mt-10 text-right ${theme}-text`}>
      <h5 className="text-lg font-medium">{greeting[locale].greet}</h5>
      <h2 className="text-4xl font-bold">{name}</h2>
    </div>
  );
}

TitleUser.propTypes = {
  name: PropTypes.string.isRequired,
};
