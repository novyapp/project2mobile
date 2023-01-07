import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Box, Header, Text } from "../../components";

import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { DataPoint } from "./Graph";

const data: DataPoint[] = [
  {
    date: new Date("2023-01-01").getTime(),
    value: 0,
    color: "primary",
  },
  {
    date: new Date("2023-02-01").getTime(),
    value: 40,
    color: "primary",
  },
  {
    date: new Date("2023-03-01").getTime(),
    value: 0,
    color: "yellow",
  },
  {
    date: new Date("2023-04-01").getTime(),
    value: 240,
    color: "orange",
  },
  {
    date: new Date("2023-05-01").getTime(),
    value: 0,
    color: "primary",
  },

  {
    date: new Date("2023-06-01").getTime(),
    value: 300,
    color: "yellow",
  },
  {
    date: new Date("2023-07-01").getTime(),
    value: 220,
    color: "primary",
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box backgroundColor="white" flex={1}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
        title="Transaction Hitory"
      />
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              TOTAL SPEND
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box
            backgroundColor="primaryLight"
            paddingHorizontal="m"
            paddingVertical="s"
            borderRadius="m"
          >
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph {...{ data }} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
