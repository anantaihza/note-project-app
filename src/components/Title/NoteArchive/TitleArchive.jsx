import { useLocale } from "../../../contexts/LocaleContext";
import { noteArchived } from "../../../utils/contentLocale";

export default function TitleArchive() {
  const { locale } = useLocale();
  return (
    <>
      <h1 className="text-3xl font-bold">{noteArchived[locale].title}</h1>
    </>
  );
}
