import {
  createText,
  createBox,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
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
      fontFamily: "SFProDisplay-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    hero: {
      fontSize: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
      lineHeight: 80,
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

export const useTheme = () => useReTheme<Theme>();
//export default theme;
