import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type NavigationProp = CompositeNavigationProp<

//   NativeStackNavigationProp<RootStackParamList>,
// export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HabitsForm'>;

const BottomMenu = () => {
  // const navigation = useNavigation<NavigationProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToForm = (habitId: string) => {
    navigation.navigate('HabitsForm', { habitId });
  }

  return (
    <Wrapper>
      <IconButton onPress={navigateToForm} />
    </Wrapper>
  )
}

const Wrapper = styled.View<StyledProps>`
  position: absolute;
  bottom: 30px;
  right: 20px;
`

// const CustomIconButton = styled(IconButton)`
//   background-color: white;
// `

export default BottomMenu;