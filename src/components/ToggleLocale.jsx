import { useLocale } from "../contexts/LocaleContext";

export default function ToggleLocale() {
  const { locale, toggleLocale } = useLocale();
  return (
    <button onClick={toggleLocale}>
      {locale === "id" ? (
        <img
          src="/In.png"
          alt="https://www.flaticon.com/free-icons/indonesia"
          className="w-[17px]"
        />
      ) : (
        <img
          src="/En.png"
          alt="https://www.flaticon.com/free-icons/united-states"
          className="w-[17px]"
        />
      )}
    </button>
  );
}

