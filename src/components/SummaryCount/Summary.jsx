import PropTypes from "prop-types";
import CountCard from "./CountCard";
import { useLocale } from "../../contexts/LocaleContext";
import { summary } from "../../utils/contentLocale";

export default function Summary({ activeCard, countActive, countArchived }) {
  const { locale } = useLocale();

  return (
    <div className="base-container my-14">
      <div className="flex gap-8 ">
        {activeCard === "aktif" ? (
          <CountCard
            sum={countActive}
            name={summary[locale].active}
            isActive={true}
          />
        ) : (
          <CountCard sum={countActive} name={summary[locale].active} />
        )}
        {activeCard === "arsip" ? (
          <CountCard
            sum={countArchived}
            name={summary[locale].archived}
            isActive={true}
          />
        ) : (
          <CountCard sum={countArchived} name={summary[locale].archived} />
        )}
      </div>
    </div>
  );
}
Summary.propTypes = {
  activeCard: PropTypes.oneOf(["aktif", "arsip"]).isRequired,
  countActive: PropTypes.number.isRequired,
  countArchived: PropTypes.number.isRequired,
};
