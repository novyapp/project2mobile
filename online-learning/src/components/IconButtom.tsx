import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const IconButtom = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 30, height: 30, tintColor: "#fff", ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButtom;
