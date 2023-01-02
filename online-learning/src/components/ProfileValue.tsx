import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { SIZES, icons } from "../constants";

type Props = {};

const ProfileValue = ({ icon, label, value, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-row h-[80px] items-center"
      onPress={onPress}
    >
      {/* Icon */}
      <View className="w-8 h-8 items-center justify-center rounded-md bg-white">
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: "#42C6A5",
          }}
        />
      </View>

      {/* Label and Value */}
      <View className="flex-1 ml-4">
        {label !== undefined && <Text className="text-gray-400">{label}</Text>}
        <Text className="text-md font-semibold">{value}</Text>
      </View>

      {/* Icon */}
      <Image source={icons.right_arrow} style={{ height: 15, width: 15 }} />
    </TouchableOpacity>
  );
};

export default ProfileValue;
