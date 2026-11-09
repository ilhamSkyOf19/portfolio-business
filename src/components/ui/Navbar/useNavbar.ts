import { useLocation } from "react-router-dom";
import { useLang } from "../../../stores/lang.store";
import { useTheme } from "../../../stores/theme.store";
import { useEffect, useMemo } from "react";
import { themeOptions } from "../../../utils/theme";
import { useTranslation } from "react-i18next";

const useNavbar = () => {
  const { i18n, t } = useTranslation();

  // get pathname
  const currentPathname = useLocation().pathname;

  // get store lang
  const { lang, setLang } = useLang((state) => state);

  const handleSetLang = (language: "en" | "id") => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  // get store theme
  const { theme, setTheme } = useTheme((state) => state);

  // effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const currentTheme: {
    key: string;
    label: string;
    container: string;
    content: string[];
  } = useMemo(() => {
    return themeOptions.find((item) => item.key === theme) || themeOptions[0];
  }, [theme]);

  return {
    currentPathname,
    lang,
    theme,
    setTheme,
    currentTheme,
    handleSetLang,
    t,
  };
};

export default useNavbar;
