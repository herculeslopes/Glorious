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
      <LeftContainer>
        <IconButton onPress={navigateToForm} />
        <IconButton onPress={navigateToForm} />
      </LeftContainer>

      {/* <MiddleContainer>
        <MiddleButtonWrapper>
          <MiddleButton onPress={navigateToForm} />
        </MiddleButtonWrapper>
      </MiddleContainer> */}
      <MiddleContainer></MiddleContainer>
      

      <RightContainer>
        <IconButton onPress={navigateToForm} />
        <IconButton onPress={navigateToForm} />
      </RightContainer>

      <MiddleButtonWrapper>
        <MiddleButton onPress={navigateToForm} />
      </MiddleButtonWrapper>

    </Wrapper>
  )
}

const Wrapper = styled.View<StyledProps>`
  position: absolute;
  flex-direction: row;
  /* padding: 10px; */
  /* background-color: ${props => props.theme.primary.background}; */
  background-color: orange;
  /* width: 90%; */
  width: 90%;
  width: fit-content;

  bottom: 0;
  align-self: center;
  background-color: #121212;
  border-radius: 20px;
  /* overflow: hidden; */
  /* transform: translateX(-50%); */
  /* gap: 50px; */
`

const LeftContainer = styled.View<StyledProps>`
  flex-direction: row;
  padding: 10px;
  background-color: ${props => props.theme.secondary.background};

  gap: 10px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
`

const MiddleContainer = styled.View<StyledProps>`
  position: relative;
  flex-direction: row;
  background-color: ${props => props.theme.secondary.background};
  /* width: 100px; */
  width: 50px;
`

const RightContainer = styled.View<StyledProps>`
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  background-color: ${props => props.theme.secondary.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

const MiddleButtonWrapper = styled.View<StyledProps>`
  background-color: #121212;
  height: 55px;
  width: 55px;
  border-radius: 30px;
  position: absolute;
  transform: translateY(-25px);
  padding: 5px;

  left: 88px;
  
  align-items: center;
  justify-content: center;
  
`

const MiddleButton = styled(IconButton)`

`

export default BottomMenu;