import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", // Directori de sortida per al build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Pàgina principal
        aboutUs: path.resolve(__dirname, "src/about/about-us.html"),
        help: path.resolve(__dirname, "src/about/help.html"),
        rentmotionPlus: path.resolve(__dirname, "src/about/rentmotion-plus.html"),
        contact: path.resolve(
          __dirname,
          "src/contact.html"
        ),
        download: path.resolve(
          __dirname,
          "src/downloadPage.html"
        ),
        login: path.resolve(
          __dirname,
          "src/login.html"
        ),
        registers: path.resolve(
          __dirname,
          "src/register.html"
        ),
        equipment: path.resolve(__dirname, "src/services/equipment.html"),
        events: path.resolve(__dirname, "src/services/events.html"),
        ubications: path.resolve(__dirname, "src/services/ubications.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});