import { SafeAreaView, StyleSheet, View, StatusBar as NativeStatusBar } from "react-native";
import { HabitsForm, HabitsList, HabitsStats } from "./Features/Habits/Screens";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import { ThemeStyleMap, Themes } from "./Themes/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={ThemeStyleMap[Themes.DARK]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HabitsList">
            <Stack.Screen name="HabitsList" component={HabitsList} />
            <Stack.Screen name="HabitsStats" component={HabitsStats} />
          </Stack.Navigator>
          {/* <SafeAreaView style={styles.container}>
            <View style={styles.navMenu}>
            <Button onPress={() => navTo(Screens.LIST)} title="list" color="#242424" />
            <Button onPress={() => navTo(Screens.FORM)} title="form" color="#242424" />
            </View>
            {renderScreen()}
          </SafeAreaView> */}
        </NavigationContainer>
      </ThemeProvider >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // paddingTop: 20,
    paddingTop: NativeStatusBar.currentHeight,
    paddingHorizontal: 10,
  },
});