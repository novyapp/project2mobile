import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { Shadow } from "react-native-shadow-2";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { TextButton, CategoryCard } from "../../components";
import { icons, dummyData } from "../../constants";

const Search = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Search</Text>
    </View>
  );
};

export default Search;
