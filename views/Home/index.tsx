import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SafeScreen from "../../components/SafeScreen";
import {
  Text,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import WelcomeUser from "../../components/WelcomeUser";
import Colors from "../../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRef } from "react";
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
        <Text style={{ opacity: 0.5, fontSize: 12 }}>R$ 560,70</Text>
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
const Home = () => {
  const contentColor = useThemeColor(
    { light: "white", dark: "black" },
    "background"
  );
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 170],
    outputRange: [0, -170],
    extrapolate: "clamp",
  });

  const translateTitle = scrollY.interpolate({
    inputRange: [0, 280],
    outputRange: [0, 90],
    extrapolate: "clamp",
  });

  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const translateMenu = scrollY.interpolate({
    inputRange: [0, 170],
    outputRange: [0, 170],
    extrapolate: "clamp",
  });

  return (
    <SafeScreen
      darkColor={Colors.dark.mainColor}
      lightColor={Colors.light.mainColor}
    >
      <Animated.View
        style={[
          styles.headerContainer,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <ThemedView
          style={styles.headerContent}
          darkColor={Colors.dark.mainColor}
          lightColor={Colors.light.mainColor}
        >
          <Animated.View style={{ transform: [{ translateY: translateMenu }] }}>
            <View style={styles.menu}>
              <TouchableOpacity>
                <FontAwesome name="search" size={20} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="cog" size={20} color={"white"} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <View>
            <Animated.View
              style={[
                {
                  transform: [{ translateY: translateTitle }],
                  opacity: opacityTitle,
                },
              ]}
            >
              <WelcomeUser name="Genilson" />
            </Animated.View>

            <ThemedView
              style={{
                paddingHorizontal: 24,
                paddingVertical: 16,
                borderTopEndRadius: 30,
                borderTopStartRadius: 30,
                marginTop: -2,
              }}
            >
              <Text style={{ fontSize: 16 }}>Lista de compras</Text>
            </ThemedView>
          </View>
        </ThemedView>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.contentContainer}
        style={{
          backgroundColor: contentColor,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={1}
      >
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
      </Animated.ScrollView>
      <ThemedView style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
        <TouchableOpacity>
          <ThemedView
            darkColor={Colors.dark.mainColor}
            lightColor={Colors.light.mainColor}
            style={{
              borderRadius: 10,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              lightColor={Colors.dark.text}
              style={{ fontSize: 14, textAlign: "center" }}
            >
              Criar Nova lista
            </Text>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 280,
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    marginTop: StatusBar.currentHeight,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerContent: {
    width: "100%",
    height: 280,
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 280 + 14,
  },
});

export default Home;
