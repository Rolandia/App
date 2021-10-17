import { createTheme, PaletteMode, Theme } from "@mui/material";
import { components } from "./components";
/**
 * Customized Material UI themes for "light" and "dark" modes.
 *
 * @see https://next.material-ui.com/customization/default-theme/
 */
const themes = (["light", "dark"] as PaletteMode[]).map((mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "rgb(24,119,242)" : "rgb(45,136,255)",
      },
      background: {
        default: mode === "light" ? "rgb(240,242,245)" : "rgb(24,25,26)",
      },
    },

    components,
  })
);

export default {
  light: themes[0],
  dark: themes[1],
} as { [key in PaletteMode]: Theme };
