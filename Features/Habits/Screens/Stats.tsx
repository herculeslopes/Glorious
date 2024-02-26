import styled from "styled-components/native";
import { RootStackParamList, ScreenProps } from "../../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'HabitsStats'>;

const Stats = ({ route }: Props) => {
  const habitId = route.params.habitId;

  return <Wrapper>
    <Title>Stats {habitId}</Title>
  </Wrapper>
}

const Wrapper = styled.View`

`

const Title = styled.Text`
  color: black;
  font-size: 44px;
`

export default Stats;