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
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
      }}
      darkColor="#181818"
      lightColor="#f1f1f1"
    >
      <View style={{ paddingLeft: 16 }}>
        <Text style={{ fontSize: 12 }}>Lista de janeiro</Text>
        <Text style={{ opacity: 0.5, fontSize: 12, marginTop: 4 }}>
          R$ 560,70
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 40,
            paddingHorizontal: 8,
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
            <Text style={{ fontSize: 10 }}>34</Text>
            <Text style={{ opacity: 0.5, fontSize: 10 }}>/56</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={20}
            color={iconColor}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default ShoppingListCard;
