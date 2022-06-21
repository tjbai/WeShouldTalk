import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    // RED
    brand: {
      10: "#E0B9C3",
      25: "#f0bbc8",
      50: "#d98fa1",
      100: "#B25068",
      200: "#783848",
    },
    // BLUE
    // brand: {
    //   25: "#b9d6f2",
    //   50: "#006daa",
    //   100: "#003559",
    //   200: "#061a40",
    // },
    // GREEN
    // brand: {
    //   10: "b7efc5",
    //   25: "#6ede8a",
    //   50: "#2dc653",
    //   100: "#1a7431",
    //   200: "#10451d",
    // },
    // BEIGE
    // brand: {
    //   10: "#f2e9e4",
    //   25: "#c9ada7",
    //   50: "#9a8c98",
    //   100: "#4a4e69",
    //   200: "#22223b",
    // },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  breakpoints: {
    createPostOverlaps: "1000px",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
  },
});
