import {
  createText,
  createBox,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const theme = createTheme({
  colors: {
    primary: "#d62d30",
    secondary: "#17a4b8",
    text: "#e0e4e5",
    danger: "#d80000",
    body: "#2c3437",
    black: "#000",
    mars: "#cc520e",
    earth: "#25c9ef",
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    o: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    defaults: {
      fontFamily: "Helvetica-Bold",
      fontSize: 16,
      lineHeight: 24,
    },
    hero: {
      fontSize: 80,
      color: "primary",
      textAlign: "center",
      lineHeight: 80,
    },
    button: {
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Helvetica-Regular",
      lineHeight: 30,
      color: "text",
    },
    title: {
      fontSize: 30,
      fontFamily: "Helvetica-Bold",
      lineHeight: 36,
      color: "text",
    },
    text: {
      fontSize: 16,

      fontFamily: "Helvetica-Regular",
      lineHeight: 30,
      color: "text",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const SIZES = {
  width,
  height,
};

export const useTheme = () => useReTheme<Theme>();
//export default theme;
