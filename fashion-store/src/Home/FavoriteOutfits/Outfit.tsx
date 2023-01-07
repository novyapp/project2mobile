import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, RoundedIcon } from "../../components";

interface OutfitProps {
  outfit: { color: string; aspectRatio: number; id: number; selected: boolean };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <BorderlessButton
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="s"
        style={{
          backgroundColor: outfit.color,
          width: width,
          height: width * outfit.aspectRatio,
        }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="white"
            size={22}
          />
        )}
      </Box>
    </BorderlessButton>
  );
};

export default Outfit;
