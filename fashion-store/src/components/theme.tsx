import {
  createText,
  createBox,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    body: "rgba(12,13,52, 0.7)",
    text: "rgba(12,13,52, 0.5)",
    white: "white",
    grey: "rgba(12,13,52, 0.05)",
    lightGrey: "#F4F0EF",
    darkGrey: "#8A8D90",
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
    title1: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 28,
      lineHeight: 30,
      color: "secondary",
    },
    title2: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
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
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };

export const useTheme = () => useReTheme<Theme>();
//export default theme;
