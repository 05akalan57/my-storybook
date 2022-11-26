import { themes } from "@storybook/theming";

import "../styles/globals.css";

export const parameters = {
  // layout: "centered",
  darkMode: {
    dark: { ...themes.dark, appBg: "#333333" },
    light: { ...themes.normal, appBg: "#fff" },
  },
};
