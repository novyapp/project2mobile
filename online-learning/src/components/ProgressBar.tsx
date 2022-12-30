import { View, Text } from "react-native";
import React from "react";

type Props = {};

const ProgressBar = ({ containerStyle, progress }) => {
  return (
    <View
      className="w-full h-2 mt-2 rounded-md bg-white"
      style={{ ...containerStyle }}
    >
      <View
        className="absolute left-0 h-full rounded-md bg-brand-primary"
        style={{ width: progress }}
      ></View>
    </View>
  );
};

export default ProgressBar;
