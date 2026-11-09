import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LangState {
  lang: "en" | "id";
  setLang: (lang: "en" | "id") => void;
}

export const useLang = create<LangState>()(
  persist(
    (set) => ({
      lang: "id",

      setLang: (lang) =>
        set({
          lang,
        }),
    }),
    {
      name: "lang-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
