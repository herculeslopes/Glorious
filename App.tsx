import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HabitPreview } from './Features/Habits';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.habits}>
        <Text style={styles.header}>Habits</Text>
        <HabitPreview habit={{}} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
    paddingHorizontal: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  habits: {
    backgroundColor: 'blue',
  },

  header: {
    color: '#fff',
    fontSize: 44,
  }
});
