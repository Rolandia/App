import { PaletteMode } from "@mui/material";

export class ThemeHelper {
  static loadThemeMode(): PaletteMode {
    return window?.localStorage?.getItem("theme") === "dark" ? "dark" : "light";
  }

  static setThemeMode(mode: PaletteMode): PaletteMode {
    window.localStorage?.setItem("theme", mode);
    return mode;
  }
}
