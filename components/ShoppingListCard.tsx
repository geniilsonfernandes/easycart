import { FontAwesome } from "@expo/vector-icons";

import { View as ThemedView, useThemeColor } from "../components/Themed";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

const ShoppingListCard = () => {
  const iconColor = useThemeColor(
    { light: Colors.dark.background, dark: Colors.light.background },
    "text"
  );

  return (
    <ThemedView
      style={{
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        paddingHorizontal: 16,
      }}
      darkColor="#181818"
      lightColor="#f1f1f1"
    >
      <View>
        <Text style={{ fontSize: 14 }}>Lista de janeiro</Text>
        <Text style={{ opacity: 0.5, fontSize: 12, marginTop: 8 }}>
          R$ 560,70
        </Text>
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
              marginBottom: -3,
            }}
          >
            <Text style={{ fontSize: 12 }}>34</Text>
            <Text style={{ opacity: 0.5, fontSize: 12 }}>/56</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={20}
            color={iconColor}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default ShoppingListCard;
