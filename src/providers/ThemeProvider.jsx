import { useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ThemeContext from "../context/ThemeContext";

const lightTheme = {
  mode: "light",
  colors: {
    background: "#ffffff",
    surface: "#f8f9fa",
    text: "#222222",
    primary: "#2563eb",
    secondary: "#6b7280",
    border: "#e5e7eb",
  },
};

const darkTheme = {
  mode: "dark",
  colors: {
    background: "#121212",
    surface: "#1e1e1e",
    text: "#ffffff",
    primary: "#60a5fa",
    secondary: "#9ca3af",
    border: "#374151",
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;