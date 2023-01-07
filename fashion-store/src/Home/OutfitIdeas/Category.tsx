import React, { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { View, StyleSheet } from "react-native";

const OUTER_RADIUS = 34;
const INNER_RADIUS = 30;

interface CategoryProps {
  category: {
    title: string;
    color: string;
    id: string;
  };
}

const Category = ({
  category: { color: backgroundColor, title },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginTop="s" marginLeft="m" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <Box
            width={INNER_RADIUS * 2}
            height={INNER_RADIUS * 2}
            style={{
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Category;
