import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    top: BORDER_RADIUS,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
