import { FlatList, LayoutChangeEvent } from "react-native";
import { Categories, Frequencies, Habit, Units } from "../types";
import { useState } from "react";
import { HabitPreview } from "../Components";
import styled from "styled-components/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";

const habits: Habit[] = [
  { id: 1, name: 'Push-ups', category: Categories.FITNESS, aim: 100, unit: Units.REPETITIONS, frequency: Frequencies.DAILY },
  { id: 2, name: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  { id: 3, name: 'Reading', category: Categories.EDUCATIONAL, aim: 5, unit: Units.REPETITIONS, frequency: Frequencies.MONTHLY },
  // { id: 4, name: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  // { id: 5, name: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
  // { id: 6, name: 'Lose Weight', category: Categories.DIET, aim: 5, unit: Units.KG, frequency: Frequencies.MONTHLY },
]

const COLUMNS = 3;
const GAP = 10;

type Props =  NativeStackScreenProps<RootStackParamList> 

const List: React.FC<Props> = ({ navigation }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }

  const calculateWidth = () => (containerWidth - GAP * (COLUMNS - 1)) / COLUMNS;

  const handlePress = () => {
    navigation.navigate('HabitsStats');
  }
  
  return (
    <Wrapper>
      <Title>Habits</Title>

      <FlatList
        onLayout={handleLayout}
        data={habits}
        renderItem={({ item }) => <HabitPreview habit={item} width={calculateWidth()} onPress={handlePress} />}
        numColumns={3}
        columnWrapperStyle={{ gap: GAP }}
        contentContainerStyle={{ gap: GAP }}
        keyExtractor={habit => habit.id.toString()}
      />

      {/* <View onLayout={handleLayout} style={styles.list}>
          {habits.map(habit => <HabitPreview key={habit.id} habit={habit} width={calculateWidth()} />)}
        </View> */}
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
`

const Title = styled.Text`
  color: black;
  font-size: 44px;
  font-weight: bold;
`

export default List;