import { Ionicons } from "@expo/vector-icons";

import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { View as ThemedView, useThemeColor, Text } from "../components/Themed";
import Colors from "../constants/Colors";

type ShoppingListCardProps = {
  name: string;
  price?: number;
  items?: number;
};
const ShoppingListCard = ({ items, name, price }: ShoppingListCardProps) => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );

  return (
    <ThemedView
      style={styles.container}
      darkColor="#181818"
      lightColor="#f1f1f1"
    >
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>R$ 560,70</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>34</Text>
            <Text style={{ opacity: 0.5, fontSize: 12 }}>/56</Text>
          </View>
          <Pressable>
            <Ionicons name="chevron-forward" size={20} color={iconColor} />
          </Pressable>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.5,
    fontWeight: "bold",
  },
});

export default ShoppingListCard;
