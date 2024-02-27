import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Path, Svg } from "react-native-svg";

// type NavigationProp = CompositeNavigationProp<

//   NativeStackNavigationProp<RootStackParamList>,
// export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HabitsForm'>;

const TabBg = ({ color = '#FFFFFF', ...props }) => {
  return (
    <Svg width={75} height={61} viewBox="0 0 75 61" {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};

const BottomMenu = () => {
  // const navigation = useNavigation<NavigationProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToForm = (habitId: string) => {
    navigation.navigate('HabitsForm', { habitId });
  }

  return (
    <Wrapper>

      <Menu>
        <LeftButton>

        </LeftButton>

        <Container>
          <Background />
          {/* <TabBg /> */}
          <Button>
            <Icon name="barbell" />
          </Button>
        </Container>
        <RightButton>

        </RightButton>
      </Menu>
    </Wrapper>
  )
}

const LeftButton = styled.View`
  height: 50px;
  background-color: white;
  width: 100px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

const RightButton = styled.View`
  height: 50px;
  background-color: white;
  color: ${props => props.theme.secondary.background};
  width: 100px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

const Wrapper = styled.View`
  background-color: #121212;
  align-items: center;
`

const Menu = styled.View<StyledProps>`
  flex-direction: row;
  /* position: absolute; */
  /* position: relative; */
  height: 50px;
  background-color: orange;
  background-color: transparent;
  align-items: center;
  gap: -1;
`

const Container = styled.View`
  position: relative;
  width: 75px;
  align-items: center;
  /* justify-content: center; */
`

const Background = styled(TabBg)`
  position: absolute;
  top: 0;
  right: 0;
`

const Button = styled.TouchableOpacity`
  top: -22.5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 27px;
  background-color: #E94F37;
  
`

const Icon = styled(Ionicons)`
  font-size: 40px;
  color: #F6F7EB;
`

// const CustomIconButton = styled(IconButton)`
//   background-color: white;
// `

export default BottomMenu;