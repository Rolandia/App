import { PaletteMode, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import theme from "../themes";
import { ThemeHelper } from "../themes/theme-helper";

function App() {
  const [themeMode, setTheme] = useState<PaletteMode>(
    ThemeHelper.loadThemeMode()
  );

  const handleChangeTheme = (): void => {
    setTheme((oldState) =>
      ThemeHelper.setThemeMode(oldState === "light" ? "dark" : "light")
    );
  };

  return <ThemeProvider theme={theme[themeMode]}>Testes</ThemeProvider>;
}

export default App;
