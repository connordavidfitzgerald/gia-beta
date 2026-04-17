// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Marcin Antique",
      cssVariable: "--font-sans",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/MarcinAntique-StandardRegular.otf"],
            display: "block",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Bradford LL",
      cssVariable: "--font-serif",
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/BradfordLL-Regular.otf"],
            display: "block",
          },
          {
            weight: 300,
            style: "italic",
            src: ["./src/assets/fonts/BradfordLL-RegularItalic.otf"],
            display: "block",
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/BradfordLL-Book.otf"],
            display: "block",
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/BradfordLL-BookItalic.otf"],
            display: "block",
          },
        ],
      },
    },
  ],
});
