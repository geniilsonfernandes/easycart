import React from "react";
import { Text } from "../../components/Themed";
import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "list" + id }} />
    </View>
  );
};

export default Page;
