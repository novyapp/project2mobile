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

  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

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
      <View className="mt-8">
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
                marginTop: 24,
                marginLeft: (index + 1) % 2 === 0 ? 16 : 16,
              }}
            />
          )}
        />
      </View>
    );
  }

  function renderSearchBar() {
    const inputRange = [0, 55];

    const searchBarAnimatedStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollY.value,
          inputRange,
          [55, 0],
          Extrapolate.CLAMP
        ),
        opacity: interpolate(
          scrollY.value,
          inputRange,
          [1, 0],
          Extrapolate.CLAMP
        ),
      };
    });

    return (
      <Animated.View
        className="absolute top-12 left-0 right-0 px-4 h-12"
        style={[{}, searchBarAnimatedStyle]}
      >
        <Shadow>
          <View
            className="flex-1 flex-row items-center px-4 bg-white"
            style={{ width: SIZES.width - 18 * 2, borderRadius: 12 }}
          >
            <Image
              source={icons.search}
              style={{
                height: 25,
                width: 25,
                tintColor: "#808080",
              }}
            />

            <TextInput
              className="flex-1 ml-2 text-gray-500"
              placeholder="Search for Topics, Courses and Educators"
            />
          </View>
        </Shadow>
      </Animated.View>
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
        onScroll={onScroll}
        onScrollEndDrag={(event) => {
          if (
            event.nativeEvent.contentOffset.y > 10 &&
            event.nativeEvent.contentOffset.y < 50
          ) {
            scrollViewRef.current?.scrollTo({
              x: 0,
              y: 60,
              animated: true,
            });
          }
        }}
      >
        {/* Top Searches */}
        {renderTopSearches()}

        {/* Browse Categories */}
        {renderBrowseCategories()}
      </Animated.ScrollView>

      {/* Search Bar */}
      {renderSearchBar()}
    </View>
  );
};

export default Search;
