import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  TouchableOpacityBase,
  TouchableOpacityComponent,
} from "react-native";
import React, { useEffect, useRef } from "react";

import { SIZES } from "../constants";

type Props = {};

const ProfileRadioButton = ({ icon, label, isSelected, onPress }) => {
  const radioAnimated = useRef(new Animated.Value(0)).current;
  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 22],
    outputRange: ["#ebebeb", "#42C6A5"],
  });
  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 22],
    outputRange: ["#ebebeb", "#42C6A5"],
  });

  useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 22,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);
  return (
    <View className="flex-row h-20 items-center">
      {/* Icon */}
      <View className="w-10 h-10 items-center justify-center rounded-md bg-green-100">
        <Image
          source={icon}
          resizeMode="contain"
          style={{ height: 25, width: 25, tintColor: "#42C6A5" }}
        />
      </View>

      {/* Label */}
      <View className="flex-1 ml-2 ">
        <Text className="font-semibold">{label}</Text>
      </View>

      {/* Radio Button */}
      <TouchableOpacity
        activeOpacity={1}
        className="w-10 h-10 items-center justify-center"
        onPress={onPress}
      >
        <Animated.View
          className="w-full h-[5px] rounded-md "
          style={{
            backgroundColor: lineColorAnimated,
          }}
        />
        <Animated.View
          className="absolute w-5 h-5 rounded-full border-4 bg-white opacity-100"
          style={{ left: radioAnimated, borderColor: circleColorAnimated }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioButton;
