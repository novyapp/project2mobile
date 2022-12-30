import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";

import { SIZES, icons, images, dummyData } from "../../constants";

import {
  IconButtom,
  TextButton,
  VerticalCourseCard,
  LineDevider,
  CategoryCard,
  HorizontalCourseCard,
} from "../../components";
import { FlatList } from "react-native-gesture-handler";

const Section = ({ containerStyle, title, onPress, children }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View className="flex-row px-4">
        <Text className="flex-1 text-lg font-semibold">{title}</Text>
        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 80,
            backgroundColor: "#42C6A5",
          }}
          label="See All"
          onPress={onPress}
          disabled={undefined}
          labelStyle={undefined}
        />
      </View>
      {children}
    </View>
  );
};

const Home = () => {
  function renderHeader() {
    return (
      <View className="flex-row mt-12 mb-2 px-6 items-center">
        {/* Greeting */}
        <View className="flex-1">
          <Text className="text-lg font-semibold">Hello, novyAPP</Text>
          <Text className=" text-gray-500">29.12.2022</Text>
        </View>

        {/* Notifications */}
        <IconButtom
          icon={icons.notification}
          iconStyle={{ tintColor: "#000" }}
          containerStyle={undefined}
          onPress={undefined}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        className="items-start mt-8 mx-4 p-4"
        imageStyle={{ borderRadius: 6 }}
      >
        {/* Info */}
        <View>
          <Text className="text-white text-lg">HOW TO</Text>
          <Text className="text-white text-lg font-semibold">
            Make your brand more visible with our checklist
          </Text>
          <Text className="text-white">By Jan Kowalski</Text>
        </View>
        {/* Image */}
        <Image
          source={images.start_learning}
          resizeMode="contain"
          style={{ width: "100%", height: 120, marginTop: 36 }}
        />
        {/* Button */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: 24,
            borderRadius: 16,
            backgroundColor: "#fff",
          }}
          labelStyle={{
            color: "#000",
          }}
          disabled={undefined}
          onPress={undefined}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={(item) => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 18 }}
        renderItem={({ item, index }) => (
          <VerticalCourseCard
            containerStyle={{
              marginLeft: index == 0 ? 18 : 18,
              marginRight:
                index == dummyData.courses_list_1.length - 1 ? 18 : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }

  function renderCategories() {
    return (
      <Section
        title="Categories"
        containerStyle={undefined}
        onPress={undefined}
      >
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey="Categories"
          keyExtractor={(item) => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 12 }}
          renderItem={({ item, index }) => (
            <CategoryCard
              category={item}
              containerStyle={{
                marginLeft: index === 0 ? 16 : 0,
                marginRight:
                  index === dummyData.categories.length - 1 ? 16 : 12,
              }}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularCourses() {
    return (
      <Section
        title="Popular Courses"
        containerStyle={{ marginTop: 30 }}
        onPress={undefined}
      >
        <FlatList
          data={dummyData.courses_list_2}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={(item) => `PopularCourses-${item.id}`}
          contentContainerStyle={{ marginTop: 12, paddingHorizontal: 16 }}
          renderItem={({ item, index }) => (
            <HorizontalCourseCard
              course={item}
              containerStyle={{
                marginVertical: 12,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <LineDevider lineStyle={{ backgroundColor: "#BBCCCC" }} />
          )}
        />
      </Section>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Learning */}
        {renderStartLearning()}

        {/* Courses */}
        {renderCourses()}

        <LineDevider lineStyle={{ marginVertical: 20 }} />

        {/* Categories */}
        {renderCategories()}

        {/* Popular Courses */}
        {renderPopularCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;
