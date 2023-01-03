import { createText, createBox, createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    text: "#0C0D34",
    button: "#0C0D34",
    body: "rgba(12,13,52, 0.7)",
    white: "white",
    grey: "rgba(12,13,52, 0.05)",
    lightGrey: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 28,
      color: "text",
    },
    title2: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "text",
    },
    body: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    button: {
      fontFamily: "SFProDisplay-Medium",
      fontSize: 15,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export type Theme = typeof theme;
export default theme;
