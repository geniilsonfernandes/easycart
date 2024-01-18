import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Alert, Pressable, View, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor:
                colorScheme !== "dark"
                  ? Colors.light.mainColor
                  : Colors.dark.mainColor,
            },
            headerTitleStyle: {
              fontSize: 16,
            },
            headerTintColor: Colors.dark.text,
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="sheet" options={{}} />
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "",
              headerLeft(props) {
                return (
                  <Pressable
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: Colors.light.mainColor,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="user"
                      size={16}
                      color={Colors.dark.text}
                      onPress={() => {}}
                    />
                  </Pressable>
                );
              },
              headerRight(props) {
                return (
                  <Pressable
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: Colors.light.mainColor,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      Alert.alert("Settings");
                    }}
                  >
                    <Feather
                      name="settings"
                      size={16}
                      color={Colors.dark.text}
                    />
                  </Pressable>
                );
              },
            }}
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen
            name="new-list"
            options={{
              headerTitle: "Nova lista",
            }}
          />
          <Stack.Screen
            name="list"
            options={{
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="add-item"
            options={{
              headerTitle: "Adicionar item",
            }}
          />
          <Stack.Screen
            name="/shoop"
            options={{
              headerTitle: "Adicionar item",
            }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
