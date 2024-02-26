import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type NavigationProp = CompositeNavigationProp<

//   NativeStackNavigationProp<RootStackParamList>,


const BottomMenu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const navigateToForm = () => {
    navigation.navigate('HabitsForm');
  }
  
  return (
    <Wrapper>
      <IconButton onPress={navigateToForm} />
    </Wrapper>
  )
}

const Wrapper = styled.View<StyledProps>`
  padding: 10px;
  background-color: ${props => props.theme.primary.background};
`

const ReduxTest = styled.Text`
  color: white,
`

export default BottomMenu;