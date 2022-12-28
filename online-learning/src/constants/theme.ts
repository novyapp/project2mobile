import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#42C6A5", // Green
  primary2: "#FBB344", // Orange
  primary3: "#33354E", // Dark Blue
  secondary: "#FC2626", // Red
};
export const SIZES = {
  width,
  height,
};

const appTheme = { SIZES };

export default appTheme;
