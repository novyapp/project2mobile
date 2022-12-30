import React, { useRef } from "react";
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
import { icons, dummyData, SIZES } from "../../constants";

const Search = () => {
  const scrollViewRef = useRef();

  function renderTopSearches() {
    return (
      <View className="mt-2">
        <Text className="mx-6 font-semibold text-lg ">Top Searches</Text>

        <FlatList
          horizontal
          data={dummyData.top_searches}
          listKey="TopSearches"
          keyExtractor={(item) => `TopSearches-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 12 }}
          renderItem={({ item, index }) => (
            <TextButton
              label={item.label}
              contentContainerStyle={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginLeft: index === 0 ? 12 : 6,
                marginRight:
                  index === dummyData.top_searches.length - 1 ? 12 : 6,
                borderRadius: 12,
                backgroundColor: "#ebebeb",
              }}
              labelStyle={{ color: "#2b2b2b" }}
            />
          )}
        />
      </View>
    );
  }

  function renderBrowseCategories() {
    return (
      <View className="mt-4">
        <Text className="mx-6 font-semibold text-lg ">Browse Categories</Text>
        <FlatList
          data={dummyData.categories}
          numColumns={2}
          scrollEnabled={false}
          listKey="BrowseCategories"
          keyExtractor={(item) => `BrowseCategories-${item.id}`}
          contentContainerStyle={{ marginTop: 12 }}
          renderItem={({ item, index }) => (
            <CategoryCard
              category={item}
              containerStyle={{
                height: 130,
                width: (SIZES.width - 22 * 2 - 6) / 2,
                marginTop: 16,
                marginLeft: (index + 1) % 2 === 0 ? 16 : 16,
              }}
            />
          )}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 300,
        }}
        showVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
      >
        {/* Top Searches */}
        {renderTopSearches()}

        {/* Browse Categories */}
        {renderBrowseCategories()}
      </Animated.ScrollView>
    </View>
  );
};

export default Search;
