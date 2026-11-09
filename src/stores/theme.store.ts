import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme) =>
        set({
          theme,
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
