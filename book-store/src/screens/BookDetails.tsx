import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../constants";

type Props = {};

export const BookInfoSection = ({ book }) => {
  const navigation = useNavigation();

  const LineDevider = () => {
    return (
      <View className="w-[1px] h-full">
        <View className="flex-1 border-brand-lightGray2/20 border-l"></View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={book.bookCover}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: book.backgroundColor,
        }}
      ></View>
      {/* Navigation */}
      <View className="flex-row px-2 h-32 items-end">
        <TouchableOpacity className="pl-2" onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow_icon}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: book.navTintColor }}
          />
        </TouchableOpacity>

        <View className="flex-1 items-center justify-center">
          <Text
            className="font-semibold text-lg"
            style={{ color: book.navTintColor }}
          >
            Book Details
          </Text>
        </View>

        <TouchableOpacity
          className="pr-2"
          onPress={() => console.log("Click More")}
        >
          <Image
            source={icons.more_icon}
            resizeMode="contain"
            style={{ height: 30, width: 30, tintColor: book.navTintColor }}
          />
        </TouchableOpacity>
      </View>

      {/* Book Cover */}
      <View className="items-center pt-2" style={{ flex: 5 }}>
        <Image
          source={book.bookCover}
          resizeMode="contain"
          style={{ flex: 1, width: 150, height: "auto" }}
        />
      </View>

      {/* Book Name */}

      <View style={{ flex: 1.8 }} className="items-center justify-center">
        <Text
          className="font-semibold text-lg"
          style={{ color: book.navTintColor }}
        >
          {book.bookName}
        </Text>
        <Text style={{ color: book.navTintColor }}>{book.author}</Text>
      </View>

      {/* Info Book */}

      <View className="flex-row py-2 m-2 mx-8 bg-black/20 rounded-md ">
        {/* Rating  */}
        <View className="flex-1 items-center">
          <Text className="text-brand-white font-semibold">{book.rating}</Text>
          <Text className="text-brand-lightGray3">Rating</Text>
        </View>
        <LineDevider />
        {/* Pages  */}
        <View className="flex-1 items-center px-2">
          <Text className="text-brand-white font-semibold">{book.pageNo}</Text>
          <Text className="text-brand-lightGray3">Number of Page</Text>
        </View>
        <LineDevider />
        {/* Lang */}
        <View className="flex-1 items-center">
          <Text className="text-brand-white font-semibold">
            {book.language}
          </Text>
          <Text className="text-brand-lightGray3">Language</Text>
        </View>
      </View>
    </View>
  );
};

export const BookDescription = ({ book }) => {
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);
  const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;
  return (
    <View className="flex-1 flex-row px-4 pt-8">
      <View className="w-1 h-full bg-brand-gray1">
        <Animated.View
          className="bg-brand-lightGray4 rounded-md"
          style={{
            width: 4,
            height: indicatorSize,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  scrollViewVisibleHeight / scrollViewWholeHeight
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
      </View>
      <ScrollView
        className="px-8"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onContentSizeChange={(width, height) => {
          setScrollViewWholeHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: { x, y, width, height },
          },
        }) => {
          setScrollViewVisibleHeight(height);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: indicator } } }],
          { useNativeDriver: false }
        )}
      >
        <Text className="font-semibold text-xl text-brand-white ">
          Description
        </Text>
        <Text className="text-brand-lightGray text-[16px] leading-6">
          {book.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export const BottomButton = () => {
  return (
    <View className="flex-1 flex-row">
      <TouchableOpacity
        className="bg-brand-secondary ml-4 my-2 rounded-md items-center justify-center w-12"
        onPress={() => console.log("Bookmark")}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: "#EFEFF0" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 bg-brand-primary mr-6 my-2 ml-2 rounded-md items-center justify-center"
        onPress={() => console.log("Start Reading")}
      >
        <Text className="text-brand-white font-semibold">Start reading</Text>
      </TouchableOpacity>
    </View>
  );
};

const BookDetails = ({ route, navigation }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  if (book) {
    return (
      <View className=" bg-brand-black text-white flex-1">
        {/* Cover */}
        <View style={{ flex: 4 }}>
          <BookInfoSection book={book} />
        </View>
        {/* Description */}
        <View style={{ flex: 2 }}>
          <BookDescription book={book} />
        </View>
        {/* Buttons */}
        <View className="h-[70px] mb-2 mt-4">
          <BottomButton />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetails;
