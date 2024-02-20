import { StyleSheet, Text, View } from "react-native";
import { HabitPreview } from "..";
import { Categories, Frequencies, Habit, Units } from "../types";
import { StatusBar } from "expo-status-bar";

const habits: Habit[] = [
  { id: 1, title: 'Push-ups', category: Categories.FITNESS, aim: 100, unit: Units.REPETITIONS, frequency: Frequencies.DAILY },
  { id: 2, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 3, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 4, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 5, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
]

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Habits</Text>

      <View style={styles.list}>
        {habits.map(habit => <HabitPreview habit={habit} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },

  header: {
    color: '#fff',
    fontSize: 44,
  },

  list: {
    flexDirection: 'row',
    gap: 5,
  }
});

export default List;