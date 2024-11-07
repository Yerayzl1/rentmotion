import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        aboutUs: path.resolve(__dirname, "src/about/about-us.html"),
        help: path.resolve(__dirname, "src/about/help.html"),
        rentmotionPlus: path.resolve(__dirname, "src/about/rentmotion-plus.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        download: path.resolve(__dirname, "src/downloadPage.html"),
        login: path.resolve(__dirname, "src/login.html"),
        registers: path.resolve(__dirname, "src/register.html"),
        equipment: path.resolve(__dirname, "src/services/equipment.html"),
        events: path.resolve(__dirname, "src/services/events.html"),
        ubications: path.resolve(__dirname, "src/services/ubications.html"),
        mainJS: path.resolve(__dirname, "main.js"),
        mapJs: path.resolve(__dirname, "assets/js/map.js"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
