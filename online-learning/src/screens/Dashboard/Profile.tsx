import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  IconButtom,
  TextButton,
  LineDevider,
  ProgressBar,
} from "../../components";
import { SIZES, icons, images } from "../../constants";

const Profile = () => {
  function renderHeader() {
    return (
      <View className="flex-row mt-12 px-5 justify-between">
        <Text className="text-lg font-semibold">Profile</Text>
        <IconButtom
          icon={icons.sun}
          iconStyle={{ tintColor: "#000" }}
          containerStyle={undefined}
          onPress={undefined}
        />
      </View>
    );
  }

  function renderProfileCard() {
    return (
      <View className="flex-row mt-4 px-4 py-4 rounded-md bg-brand-primary3">
        {/* Profile Image */}
        <TouchableOpacity style={{ height: 80, width: 80 }}>
          <Image
            source={images.profile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
          <View className="absolute w-full h-full items-center justify-end">
            <View className="w-[30px] h-[30px] mb-[-15px] items-center justify-center rounded-full bg-brand-primary">
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{ height: 17, width: 17 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Details Section */}
        <View className="flex-1 ml-4 items-start">
          <Text className="text-2xl text-white font-semibold">novyAPP</Text>
          <Text className="text-white">Full Stack Developer</Text>

          <ProgressBar progress="58%" containerStyle={undefined} />
          <View className="flex-row">
            <Text className="flex-1 text-white text-xs">Overall Progress</Text>
            <Text className="text-white text-xs">58%</Text>
          </View>

          {/* Member Section */}
          <TextButton
            label="+ Become Member"
            contentContainerStyle={{
              height: 35,
              marginTop: 12,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: "#fff",
            }}
            labelStyle={{
              color: "#42C6A5",
            }}
            disabled={undefined}
            onPress={undefined}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom: 15,
        }}
      >
        {/* Profile Card */}
        {renderProfileCard()}
      </ScrollView>
    </View>
  );
};

export default Profile;
