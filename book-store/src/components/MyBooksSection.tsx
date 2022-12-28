import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { IBook } from "../@types/IBook";
import { navigationProps } from "../@types/INav";
type Props = {};
import { images, icons } from "../constants/";

const MyBooksSection = ({ myBooks }: { myBooks: IBook[] }) => {
  const navigation = useNavigation<navigationProps>();

  const renderBookItem = ({ item, index }: { item: IBook; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: index == 0 ? 0 : 20,
          marginRight: 6,
        }}
        onPress={() =>
          navigation.navigate("BookDetail", {
            book: item,
          })
        }
      >
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{ width: 180, height: 250, borderRadius: 20 }}
        />
        <View className="flex-row items-center py-2 space-x-6 my-2">
          <View className="flex-row space-x-1">
            <Image
              source={icons.clock_icon}
              style={{ height: 18, width: 18, tintColor: "#64676D" }}
            />
            <Text className="text-sm text-brand-lightGray">
              {item.lastRead}
            </Text>
          </View>
          <View className="flex-row space-x-1">
            <Image
              source={icons.page_icon}
              style={{ height: 18, width: 18, tintColor: "#64676D" }}
            />
            <Text className="text-sm text-brand-lightGray">
              {item.completion}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex min-h-[380px]">
      <View className="flex-row items-end">
        <Text className="text-brand-lightGray2 font-semibold text-3xl flex-1">
          My Book
        </Text>
        <TouchableOpacity onPress={() => console.log("See more")}>
          <Text className="text-brand-lightGray4 underline pb-1">See More</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 mt-5">
        <FlatList
          data={myBooks}
          renderItem={renderBookItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: IBook) => item.id}
        />
      </View>
    </View>
  );
};

export default MyBooksSection;
