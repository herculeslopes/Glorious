import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Screen, StyledProps, Title } from "../../../Components/StyledComponents"
import { RootStackParamList, ScreenProps } from "../../../types";
import { executeQuery } from "../../../API/database";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Habit } from "../types";
import { useLayoutEffect } from "react";
import styled from "styled-components/native";
import { CustomButton } from "../../../Components";
import { Text } from "react-native";
import { ThemeStyles } from "../../../Themes/types";

type Props = NativeStackScreenProps<RootStackParamList, 'HabitsDetails'>;

const Details = ({ route, navigation }: Props) => {
  const habitId = route.params.habitId;

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['habits-details'],
    queryFn: async () => await executeQuery(
      `SELECT * FROM habit WHERE id=?`,
      [habitId]
    ) as Habit[],
  });

  const habit = data?.[0];

  const { mutate: mutateDelete } = useMutation({
    mutationKey: [habitId],
    mutationFn: async () => await executeQuery(
      `DELETE FROM habit WHERE id=?`,
      [habitId]
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits-list'] });
      navigation.navigate('HabitsList');
    },
  });

  const editHabit = () => {

  }

  const deleteHabit = () => {
    console.log('error asdlfasdlçk');
    mutateDelete();
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${habit?.name}` });
  }, [habit]);

  return (
    <Screen contentContainerStyle={{ flex: 1, gap: 20 }}>
      <Content>
        <Title>{habit?.name}</Title>

        <Info>
          <Data>
            <Property>Category: </Property>
            <Value>{habit?.category}</Value>
          </Data>

          <Data>
            <Property>Aim: </Property>
            <Value>{habit?.aim}</Value>
          </Data>
        </Info>
      </Content>

      <Menu>
        {/* <CustomButton text="Press me 1!" /> */}
        <CustomButton onPress={editHabit} text="EDIT" />
        <CustomButton onPress={deleteHabit} text="DELETE" />
      </Menu>
    </Screen>
  )
}

const Content = styled.View`
  flex: 1;
  /* background-color: orange; */
`

const Info = styled.View`

`

const Data = styled.View`
  flex-direction: row;
  gap: 10px;
`

const Property = styled.Text<StyledProps>`
  color: ${props => props.theme.primary.text};
  font-size: 24px;
`

const Value = styled.Text<StyledProps>`
  color: ${props => props.theme.primary.text};
  font-size: 24px;
`

const Menu = styled.View`
  /* background-color: green; */
  flex-direction: row;
  justify-content: space-evenly;
`

export default Details;