import { View, Text } from "react-native";
import React from "react";

type Props = {};

const LineDevider = ({ lineStyle }) => {
  return (
    <View className="h-[2px] w-full bg-gray-200" style={{ ...lineStyle }} />
  );
};

export default LineDevider;
