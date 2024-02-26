import { Ionicons } from "@expo/vector-icons";
import { CategoryIconMap, Habit, Units } from "../types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppNavigation } from "../../../Hooks/navigationHooks";

const Preview: React.FC<{ habit: Habit, width: number }> = ({ habit, width }) => {
  const {
    id,
    name,
    category,
    aim,
    unit,
  } = habit;

  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate('HabitsDetails', { habitId: id });
  }

  return (
    <Wrapper style={{ width }}>
      <PressableWrapper>
        <LocalPressable onPress={handlePress /*onPress as any*/} android_ripple={{ color: '#777777' }}>
          <Icon name={CategoryIconMap[category] as any} />

          <CounterWrapper>
            <Counter>0/{aim}{unit === Units.REPETITIONS ? '' : unit}</Counter>
          </CounterWrapper>
        </LocalPressable>
      </PressableWrapper>

      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  /* flex: 1; */
`

const PressableWrapper = styled.View`
  border-radius: 5px;
  overflow: hidden;
`

const LocalPressable = styled.Pressable`
  background-color: ${props => props.theme.secondary.background};
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
`
const Icon = styled(Ionicons)`
  color: ${props => props.theme.accent.default};
  font-size: 62px;
`

const CounterWrapper = styled.View`
  position: absolute;
  bottom: 5px;
  right: 5px;
`

const Counter = styled.Text`
  font-size: 10px;
  color: #777777;
`

const NameWrapper = styled.View`
  align-items: center;
`

const Name = styled.Text`
  color: #fff;
`

export default Preview;
