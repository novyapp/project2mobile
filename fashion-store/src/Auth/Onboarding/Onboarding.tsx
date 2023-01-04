import { View, StyleSheet, Dimensions, Image } from "react-native";
import React, { useRef } from "react";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import SubSlide from "./SubSlide";
import Dot from "./Dot";
import { Theme, useTheme, makeStyles } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: { flex: 1, backgroundColor: "white" },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    height: theme.borderRadii.xl,
    justifyContent: "center",
    alignItems: "center",
  },
}));

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Dont worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: { src: require("../assets/1.png"), width: 615, height: 406 },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardobe? Explore hundrets of outfit ideas",
    color: "#BEECC4",
    picture: { src: require("../assets/2.png"), width: 615, height: 406 },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: { src: require("../assets/3.png"), width: 612, height: 408 },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: { src: require("../assets/4.png"), width: 408, height: 612 },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const x = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide, _) => slide.color)
    )
  );
  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const currentIndex = useDerivedValue(() => x.value / width);

  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  return (
    <View style={styles.container}>
      {/* Top of Slider */}
      <Animated.View style={[styles.slider, slider]}>
        {/* Image Background */}
        {slides.map(({ picture }, index) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              x.value,
              [(index - 0.5) * width, index * width, (index + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP
            ),
          }));
          return (
            <Animated.View style={[styles.underlay, style]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFillObject, background]} />

        <View style={styles.footerContent}>
          {/* Pagination */}
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index }} />
            ))}
          </View>

          {/* Subtitle and Description */}
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                  key={index}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
