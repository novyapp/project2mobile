import { View, Text, Image } from "react-native";
import React from "react";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View className="flex-row items-center" style={{ ...containerStyle }}>
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: "#BBB", ...iconStyle }}
        resizeMode="contain"
      />
      <Text className="ml-2 text-gray-400" style={{ ...labelStyle }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
