import React from "react";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "../../components";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  console.log(size, footerHeight);

  return (
    <Svg
      width={size}
      height={size}
      style={{ position: "absolute", right: 0, bottom: footerHeight }}
      viewBox="0 0 1 1"
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secondary} />
    </Svg>
  );
};

export default TopCurve;
