import { createContext, useContext } from "react";

const LocaleContext = createContext();

const useLocale = () => useContext(LocaleContext);

export { LocaleContext, useLocale };