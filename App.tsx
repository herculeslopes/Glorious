import { SafeAreaView, StyleSheet, View, StatusBar as NativeStatusBar, Text } from "react-native";
import { HabitsDetails, HabitsForm, HabitsList, HabitsStats } from "./Features/Habits/Screens";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import { ThemeStyleMap, Themes } from "./Themes/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { useEffect, useState } from "react";
import { init } from "./API/database";
import AppLoading from "expo-app-loading";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomMenu } from "./Components";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

// console.log('New')

export default function App() {
  const [appIsLoading, setAppIsLoading] = useState(true);


  const loadDatabase = async () => {
    try {
      const data = await init();
      // console.log(data);
      setAppIsLoading(false);
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    loadDatabase();
  }, []);

  if (appIsLoading) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={ThemeStyleMap[Themes.DARK]}>
            <NavigationContainer>
              {/* <Text>asdf</Text> */}

              <Stack.Navigator initialRouteName="HabitsList" screenOptions={{
                // contentStyle: { backgroundColor: '#121212' },
              }}>
                <Stack.Screen name="HabitsForm" component={HabitsForm} />
                <Stack.Screen name="HabitsList" component={HabitsList} />
                <Stack.Screen name="HabitsDetails" component={HabitsDetails} />
                <Stack.Screen name="HabitsStats" component={HabitsStats} />
              </Stack.Navigator>
              {/* <SafeAreaView style={styles.container}>
            <View style={styles.navMenu}>
            <Button onPress={() => navTo(Screens.LIST)} title="list" color="#242424" />
            <Button onPress={() => navTo(Screens.FORM)} title="form" color="#242424" />
            </View>
            {renderScreen()}
          </SafeAreaView> */}

              <BottomMenu />
            </NavigationContainer>
          </ThemeProvider >
        </QueryClientProvider>
      </Provider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#121212',
//     // paddingTop: 20,
//     paddingTop: NativeStatusBar.currentHeight,
//     paddingHorizontal: 10,
//   },
// });