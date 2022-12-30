import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

type Props = {};

const CategoryCard = ({ category, containerStyle }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{ ...containerStyle }}
        className="justify-end px-4 py-2 w-[200px] h-[150px]"
        imageStyle={{
          borderRadius: 8,
        }}
      >
        <Text className="text-white font-semibold text-lg pb-3">
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
