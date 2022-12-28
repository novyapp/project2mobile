import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IBook } from "../@types/IBook";
import { ICategories } from "../@types/ICategories";
import { MainStackParamList } from "../@types/Stacks";

import { images, icons } from "../constants/";
import MyBooksSection from "../components/MyBooksSection";
import { useNavigation } from "@react-navigation/native";
import { navigationProps } from "../@types/INav";

export const LineDevider = () => {
  return (
    <View className="w-[1px] h-full">
      <View className="flex-1 border-brand-lightGray border-l"></View>
    </View>
  );
};

export const HomeHeader = () => {
  return (
    <View>
      <Text className="text-brand-lightGray3 text-lg">Good Morning</Text>
      <View className="flex-row">
        <Text className="text-3xl text-brand-lightGray3 flex-1">novyAPP</Text>
        <TouchableOpacity className="bg-brand-primary rounded-full flex-row items-center space-x-2 px-1 pr-4">
          <View className="bg-brand-black/40 rounded-full h-8 w-8 p-1 px-0 items-center justify-center">
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              className="h-4 w-4 "
            />
          </View>
          <Text className="text-white">240 points</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ButtonSection = () => {
  return (
    <View className="bg-brand-gray p-2 py-4 justify-evenly rounded-md my-12 divide-brand-lightGray4 flex-row ">
      <TouchableOpacity
        onPress={() => console.log("Claim")}
        className="flex-row items-center space-x-2"
      >
        <Image
          source={icons.claim_icon}
          className="h-6 w-6"
          resizeMode="contain"
        />
        <Text className="text-white">Claim</Text>
      </TouchableOpacity>
      <LineDevider />
      <TouchableOpacity
        onPress={() => console.log("get Point")}
        className="flex-row items-center space-x-2"
      >
        <Image
          source={icons.point_icon}
          className="h-6 w-6"
          resizeMode="contain"
        />
        <Text className="text-white">Get Point</Text>
      </TouchableOpacity>
      <LineDevider />
      <TouchableOpacity
        onPress={() => console.log("My Card")}
        className="flex-row items-center space-x-2"
      >
        <Image
          source={icons.card_icon}
          className="h-6 w-6"
          resizeMode="contain"
        />
        <Text className="text-white">My Card</Text>
      </TouchableOpacity>
    </View>
  );
};

type CategoryHeaderProps = {
  selectedCategory: number;
  setSelectedCategory: (item: number) => void;
  categories: ICategories[];
};
export const CategoryHeader = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryHeaderProps) => {
  const renderCategoryHeaderItem = ({ item }: { item: ICategories }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item.id)}
        className="flex-1"
      >
        {selectedCategory == item.id && (
          <Text className="text-brand-white text-lg pr-8">
            {item.categoryName}
          </Text>
        )}
        {selectedCategory != item.id && (
          <Text className="text-brand-lightGray text-lg pr-8">
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryHeaderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
      />
    </View>
  );
};

type CategoryDataProps = {
  selectedCategory: number;
  categories: ICategories[];
};

export const CategoryData = ({
  selectedCategory,
  categories,
}: CategoryDataProps) => {
  const navigation = useNavigation<navigationProps>();

  var books: any = [];

  let selectedCategoryBooks = categories.filter(
    (a) => a.id == selectedCategory
  );

  if (selectedCategoryBooks.length > 0) {
    books = selectedCategoryBooks[0].books;
  }

  const renderBookItem = ({ item }: { item: IBook }) => {
    return (
      <View className="w-[360px]">
        <TouchableOpacity
          onPress={() => navigation.navigate("BookDetail", { book: item })}
          className="flex-row space-x-4 py-2"
        >
          <View>
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />
          </View>
          <View>
            <View>
              <Text className="text-brand-white text-lg font-semibold">
                {item.bookName}
              </Text>
              <Text className="text-brand-lightGray">{item.author}</Text>
            </View>
            <View className="flex-row space-x-3 mt-4 items-center">
              <View className="flex-row space-x-1 mt-4 items-center">
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{ height: 16, width: 16, tintColor: "#64676D" }}
                />
                <Text className="text-brand-lightGray4">{item.pageNo}</Text>
              </View>
              <View className="flex-row space-x-1 mt-4 items-center">
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{ height: 16, width: 16, tintColor: "#64676D" }}
                />
                <Text className="text-brand-lightGray4">{item.readed}</Text>
              </View>

              {/* Genre */}
            </View>
            <View className="flex-row space-x-2 my-2">
              {item.genre.includes("Adventure") && (
                <View className="bg-brand-darkGreen p-1 px-2 rounded-md">
                  <Text className="text-brand-lightGreen font-semibold">
                    Adventure
                  </Text>
                </View>
              )}
              {item.genre.includes("Romance") && (
                <View className="bg-brand-darkRed p-1 px-2 rounded-md">
                  <Text className="text-brand-lightRed font-semibold">
                    Romance
                  </Text>
                </View>
              )}
              {item.genre.includes("Drama") && (
                <View className="bg-brand-darkBlue p-1 px-2 rounded-md">
                  <Text className="text-brand-lightBlue font-semibold">
                    Drama
                  </Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity
          className="absolute top-1 right-2"
          onPress={() => console.log("Bookmark")}
        >
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{ height: 25, width: 25, tintColor: "#64676D" }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="w-full">
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const HomeScreen = () => {
  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: ["Romance", "Adventure", "Drama"],
    readed: "12k",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: ["Adventure", "Drama"],
    readed: "13k",
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: ["Drama", "Adventure", "Romance"],
    readed: "13k",
    description:
      "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF",
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "3d 5h",
    },
    {
      ...bookTheMetropolis,
      completion: "23%",
      lastRead: "10d 5h",
    },
    {
      ...bookTheTinyDragon,
      completion: "10%",
      lastRead: "1d 2h",
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: "Best Seller",
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: "The Latest",
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: "Coming Soon",
      books: [bookTheTinyDragon],
    },
  ];

  const [myBooks, setMyBooks] = useState<IBook[]>(myBooksData);
  const [categories, setCategories] = useState<ICategories[]>(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  return (
    <View className="bg-brand-black w-full h-full p-6 flex">
      {/* Header */}
      <View>
        <HomeHeader />
        <ButtonSection />
      </View>

      <ScrollView nestedScrollEnabled={true}>
        {/* Books */}
        <View>
          <MyBooksSection myBooks={myBooks} />
        </View>
        {/* Categories */}

        <View className="mt-6">
          <CategoryHeader
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <View>
            <ScrollView horizontal={true}>
              <CategoryData
                categories={categories}
                selectedCategory={selectedCategory}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
