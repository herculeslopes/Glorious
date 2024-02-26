import { Button, FlatList, LayoutChangeEvent } from "react-native";
import { Categories, Frequencies, Habit, Units } from "../types";
import { useState } from "react";
import { HabitPreview } from "../Components";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { database, executeQuery } from "../../../API/database";
import { Screen, Title } from "../../../Components/StyledComponents";

const COLUMNS = 3;
const GAP = 10;

type Props =  NativeStackScreenProps<RootStackParamList, 'HabitsList'>;

const List = ({ navigation }: Props) => {
  const [containerWidth, setContainerWidth] = useState(0);
  // const [habits, setHabits] = useState(list);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }

  // const { data } = useQuery({
  //   queryKey: ['habits-list'],
  //   queryFn: async () => {
  //     const response = await database.transactionAsync(async transaction => {
  //       const result = await transaction.executeSqlAsync('SELECT * FROM habit', []);
  //       // console.log(result);
  //     });
  //     return [];
  //     // return result.rows;
  //   }
  // });

  const calculateWidth = () => (containerWidth - GAP * (COLUMNS - 1)) / COLUMNS;

  const { data: habits } = useQuery({
    queryKey: ['habits-list'],
    queryFn: async () => await executeQuery(`SELECT * FROM habit`, []) as Habit[],
  })

  return (
    <Screen>
      <Title>Habits</Title>
      <Button title="go to form" onPress={() => navigation.navigate('HabitsForm')} />

      <FlatList
        style={{ marginBottom: 50 }}
        onLayout={handleLayout}
        data={habits}
        renderItem={({ item }) => <HabitPreview habit={item} width={calculateWidth()} />}
        numColumns={3}
        columnWrapperStyle={{ gap: GAP }}
        contentContainerStyle={{ gap: GAP }}
        keyExtractor={habit => habit.id.toString()}
      />

      {/* <View onLayout={handleLayout} style={styles.list}>
          {habits.map(habit => <HabitPreview key={habit.id} habit={habit} width={calculateWidth()} />)}
        </View> */}
    </Screen>
  );
}

export default List;