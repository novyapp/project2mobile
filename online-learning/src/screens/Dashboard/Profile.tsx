import React, { useState } from "react";
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
  ProfileValue,
  ProfileRadioButton,
} from "../../components";

import { SIZES, icons, images } from "../../constants";

const Profile = () => {
  const [newCourseNotification, setNewCourseNotification] = useState(false);
  const [studyReminder, setStudyReminder] = useState(false);

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

  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          icon={icons.profile}
          label="Name"
          value="NovyApp"
          onPress={undefined}
        />
        <LineDevider lineStyle={undefined} />

        <ProfileValue
          icon={icons.email}
          label="Email"
          value="info@novypp.com"
          onPress={undefined}
        />
        <LineDevider lineStyle={undefined} />

        <ProfileValue
          icon={icons.password}
          label="Password"
          value="*******"
          onPress={undefined}
        />
        <LineDevider lineStyle={undefined} />

        <ProfileValue
          icon={icons.call}
          label="Contact Number"
          value="+48 123 123 123"
          onPress={undefined}
        />
      </View>
    );
  }

  function renderProfileSection2() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          icon={icons.star_1}
          value="Pages"
          label={undefined}
          onPress={undefined}
        />
        <LineDevider lineStyle={undefined} />
        <ProfileRadioButton
          icon={icons.new_icon}
          label="New Course Notifications"
          isSelected={newCourseNotification}
          onPress={() => {
            setNewCourseNotification(!newCourseNotification);
          }}
        />
        <LineDevider lineStyle={undefined} />
        <ProfileRadioButton
          icon={icons.reminder}
          label="Study Reminder"
          isSelected={studyReminder}
          onPress={() => {
            setStudyReminder(!studyReminder);
          }}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white mb-24">
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

        {/* Profile Section 1 */}
        {renderProfileSection1()}

        {/* Profile Section 2 */}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: 12,

    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#909090",
  },
});

export default Profile;
