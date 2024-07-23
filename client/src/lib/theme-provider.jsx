import React, { createContext, useContext, useEffect, useState } from "react";

// Define the Theme type
const Theme = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
};

// Initial state for the theme context
const initialState = {
  theme: Theme.SYSTEM,
  setTheme: () => null,
};

// Create a context for the theme provider
const ThemeProviderContext = createContext(initialState);

// ThemeProvider component
export function ThemeProvider({ children, defaultTheme = Theme.SYSTEM, storageKey = "vite-ui-theme" }) {
  // State to manage the theme
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  // Effect to update the document root class based on the theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(Theme.LIGHT, Theme.DARK);

    if (theme === Theme.SYSTEM) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Value to be provided by the context
  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
