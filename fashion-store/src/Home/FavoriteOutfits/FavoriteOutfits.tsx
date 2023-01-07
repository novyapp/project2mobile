import React, { useState, useRef } from "react";
import { Box, Header, useTheme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import Footer from "./Footer";
import Outfit from "./Outfit";
import TopCurve from "./TopCurve";

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFDDDD",

    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
    selected: false,
  },
];

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;

  const [outfits, setOutfits] = useState(defaultOutfits);
  const list = useRef<TransitioningView>(null);
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" durationMs={1000} />
    </Transition.Together>
  );
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Favorite Outfits"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter(({ id }) => id % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter(({ id }) => id % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve footerHeight={footerHeight} />
      </Box>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}
      >
        <Footer
          onPress={() => {
            list.current?.animateNextTransition(),
              setOutfits(outfits.filter((outfit) => !outfit.selected));
          }}
          label="Add to Favorites"
        />
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
