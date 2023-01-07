import React from "react";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";
import { BorderlessButton } from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = { iconRatio: 0.7 };

export default RoundedIconButton;
