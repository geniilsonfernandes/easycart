import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Animated,
  RefreshControl,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import SafeScreen from "../../components/SafeScreen";
import ShoppingListCard from "../../components/ShoppingListCard";
import {
  Text,
  View as ThemedView,
  useThemeColor,
} from "../../components/Themed";
import WelcomeUser from "../../components/WelcomeUser";
import Colors from "../../constants/Colors";
import SectionHeader from "../../components/SectionHeader";

const Home = () => {
  const contentColor = useThemeColor(
    { light: "white", dark: "black" },
    "background"
  );
  const headerBackgroundColor = useThemeColor(
    {
      light: Colors.light.mainColor,
      dark: Colors.dark.mainColor,
    },
    "mainColor"
  );

  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, -120],
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: headerBackgroundColor }}>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
          },

          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <Animated.View
          style={[
            {
              transform: [{ translateY: translateTitle }],
              opacity: opacityTitle,
              paddingHorizontal: 16,
              flex: 1,
              justifyContent: "flex-end",
            },
          ]}
        >
          <WelcomeUser name="Genilson" />
        </Animated.View>

        <SectionHeader title="Listas de compras" />
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.content}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
      </Animated.ScrollView>
      <ThemedView style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => router.push("/new-list")}>
          <Button title="Criar nova lista" />
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 180,
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,

    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 180 + 16,
  },
});

export default Home;
