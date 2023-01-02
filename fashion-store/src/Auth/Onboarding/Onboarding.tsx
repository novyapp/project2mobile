import { View, StyleSheet, Dimensions } from "react-native";

import React, { useRef } from "react";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, {
  interpolateColor,
  multiply,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import SubSlide from "./SubSlide";

const BORDER_RADIUS = 75;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Dont worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardobe? Explore hundrets of outfit ideas",
    color: "#BEECC4",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
  },
];

const Onboarding = () => {
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
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFillObject, background]} />
        <Animated.View
          style={[
            {
              width: width * slides.length,
              flexDirection: "row",
              backgroundColor: "white",
              borderTopLeftRadius: BORDER_RADIUS,
              flex: 1,
            },
            footerStyle,
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              onPress={() => {
                scroll.current?.scrollTo({
                  x: width * (index + 1),
                  animated: true,
                });
              }}
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
