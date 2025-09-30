import AllContextProviders from "@/context/AllContextProviders";
import { store } from "@/lib/store";
import AllProviders from "@/providers/AllProviders";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function RootLayout() {
  const [isloadedFonts] = useFonts({
    circularstdmedium500: require("@/assets/fonts/circular-std-medium-500.ttf"),
  });

  if (!isloadedFonts) {
    return null;
  }
  return (
    <Provider store={store}>
      <AllProviders>
        <AllContextProviders>
          <GestureHandlerRootView>
            <SafeAreaProvider>
              <SafeAreaView style={{ flex: 1 }}>
                <Stack
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "transparent" },
                  }}
                />
              </SafeAreaView>
              <StatusBar style="dark" />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </AllContextProviders>
      </AllProviders>
    </Provider>
  );
}
