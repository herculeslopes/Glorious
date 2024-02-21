import { Button, SafeAreaView, StyleSheet, View, StatusBar as NativeStatusBar } from "react-native";
import List from "./Features/Habits/Screens/List";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Screens } from "./Features/Habits/types";
import Form from "./Features/Habits/Screens/Form";

export default function App() {
  const [screen, setScreen] = useState(Screens.LIST);

  const renderScreen = () => {
    switch (screen) {
      case Screens.LIST:
        return <List />

      case Screens.FORM:
        return <Form />

      default:
        return <></>;
    }
  }

  const navTo = (screen: Screens) => {
    setScreen(screen);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navMenu}>
        <Button onPress={() => navTo(Screens.LIST)} title="list" color="#242424" />
        <Button onPress={() => navTo(Screens.FORM)} title="form" color="#242424" />
      </View>
      {renderScreen()}
    </SafeAreaView>
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

  navMenu: {
    flexDirection: 'row',
    gap: 5,
    // flex: 1,
    // justifyContent: 'space-evenly',
    // backgroundColor: 'blue',
  }
});