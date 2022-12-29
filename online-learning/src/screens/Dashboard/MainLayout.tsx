import React, {
  useRef,
  createRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  View,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { Home, Profile, Search } from "../../screens";
import { constants, SIZES } from "../../constants";

const bottom_tabs = constants.bottom_tabs.map((bottom_tab) => ({
  ...bottom_tab,
  ref: createRef(),
}));

const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = bottom_tabs.map((_, i) => i * SIZES.width);
  const tabIndictorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.x),
  });

  return (
    <Animated.View
      className="absolute left-0 h-full rounded-md bg-brand-primary"
      style={{
        width: tabIndictorWidth,
        transform: [{ translateX }],
      }}
    />
  );
};

const Tabs = ({ scrollX, onBottomTabPress }) => {
  const containerRef = useRef();
  const [measureLayout, setMeasureLayout] = useState([]);

  useEffect(() => {
    let ml = [];

    bottom_tabs.forEach((bottom_tab) => {
      bottom_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({ x, y, width, height });
          if (ml.length === bottom_tabs.length) {
            setMeasureLayout(ml);
          }
        }
      );
    });
  }, [containerRef.current]);

  return (
    <View className="flex-1 flex-row" ref={containerRef}>
      {/* Tab Indicator  */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {/* Tabs */}
      {bottom_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`BottomTab-${index}`}
            ref={item.ref}
            className="flex-1 px-4 items-center justify-center"
            onPress={() => onBottomTabPress(index)}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
            <Text className="text-white mt-2">{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainLayout = () => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const onBottomTabPress = useCallback((bottomTabIndex) => {
    flatListRef?.current?.scrollToOffset({
      offset: bottomTabIndex * SIZES.width,
    });
  });

  function renderContent() {
    return (
      <View className="flex-1">
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `Main-${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: SIZES.height, width: SIZES.width }}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.profile && <Profile />}
              </View>
            );
          }}
        />
      </View>
    );
  }

  function renderBottomTab() {
    return (
      <View className="mb-8 py-2 px-4 shadow-xl w-full h-28">
        <View className="flex-1 rounded-md bg-brand-primary3">
          <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress} />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Content */}
      {renderContent()}
      {/* Bottom Tab */}
      {renderBottomTab()}
    </View>
  );
};

export default MainLayout;
