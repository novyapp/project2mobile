import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { IconLabel } from "../components";
import { icons } from "../constants";

type Props = {};

const HorizontalCourseCard = ({ containerStyle, course }) => {
  return (
    <TouchableOpacity className="flex-row" style={{ ...containerStyle }}>
      {/* Thumbmail */}
      <ImageBackground
        source={course?.thumbnail}
        resizeMode="cover"
        className="w-[130px] h-[130px] mb-2"
        imageStyle={{ borderRadius: 12 }}
      >
        <View className="absolute top-3 right-3 w-7 h-7 items-center justify-center rounded-lg bg-white">
          <Image
            source={icons.favourite}
            resizeMode="contain"
            style={{
              width: 17,
              height: 17,
              tintColor: course.is_favourite ? "#FC2626" : "#B0BBBB",
            }}
          />
        </View>
      </ImageBackground>

      {/* Details Section */}
      <View className="flex-1 ml-6">
        {/* Title */}
        <Text className="text-[16px] font-semibold">{course.title}</Text>

        {/* Instructor and duration  */}
        <View className="flex-row items-center mt-4">
          <Text className="text-gray-500">By {course.instructor}</Text>
          <IconLabel
            icon={icons.time}
            label={course.duration}
            containerStyle={{ marginLeft: 12 }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
          />
        </View>

        {/* Price and Rating  */}
        <View className="flex-row items-center mt-4">
          <Text className="text-brand-primary text-xl font-semibold">
            ${course.price.toFixed(2)}
          </Text>
          <IconLabel
            icon={icons.star}
            label={course.ratings}
            containerStyle={{ marginLeft: 20 }}
            iconStyle={{ height: 15, width: 15, tintColor: "#FBB344" }}
            labelStyle={{ marginLeft: 5, color: "#000" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
