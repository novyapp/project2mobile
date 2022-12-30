import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { SIZES, icons } from "../constants";
import { IconLabel } from "../components";

type Props = {};

const VerticalCourseCard = ({ containerStyle, course }) => {
  return (
    <TouchableOpacity style={{ width: 270, ...containerStyle }}>
      {/* Thumbmail */}
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 150,
          marginBottom: 12,
          borderRadius: 12,
        }}
      />
      <View className="flex-row">
        <View className="w-12 h-12 rounded-full items-center justify-center bg-brand-primary">
          <Image source={icons.play} style={{ height: 25, width: 20 }} />
        </View>
        <View className="shrink-1 pr-8 pl-4">
          <Text className="flex-1 font-semibold">{course.title}</Text>
          <IconLabel
            icon={icons.time}
            label={course.duration}
            containerStyle={{
              marginTop: 12,
            }}
            iconStyle={undefined}
            labelStyle={undefined}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCourseCard;
