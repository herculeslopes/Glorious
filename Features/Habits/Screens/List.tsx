import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import { HabitPreview } from "..";
import { Categories, Frequencies, Habit, Units } from "../types";
import { useState } from "react";

const habits: Habit[] = [
  { id: 1, title: 'Push-ups', category: Categories.FITNESS, aim: 100, unit: Units.REPETITIONS, frequency: Frequencies.DAILY },
  { id: 2, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 3, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 4, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 5, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 6, title: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
]

const COLUMNS = 3;
const GAP = 5;

const List = () => {
  const [containerWidth, setContainerWidth] = useState(0); 

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  }
  
  const calculateWidth = () => (containerWidth - GAP * (COLUMNS - 1)) / COLUMNS; 
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Habits {calculateWidth()}</Text>
      
      <View onLayout={handleLayout} style={styles.list}>
        {habits.map(habit => <HabitPreview key={habit.id} habit={habit} width={calculateWidth()} />)}
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
    backgroundColor: 'orange',
    flexDirection: 'row',
    gap: GAP,
    flexWrap: 'wrap',
  }
});

export default List;