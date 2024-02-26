import { Pressable, View } from "react-native"
import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";

type Props = {
  text: string;
  onPress: Function;
};

const CustomButton = ({ text, onPress }: Props) => {
  return (
    <Wrapper>
      <LocalPressable onPress={() => onPress()} android_ripple={{ color: '#777777' }}>
        <View>
          <Text>{text}</Text>
        </View>
      </LocalPressable>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  border-radius: 5px;
  overflow: hidden;
`

const LocalPressable = styled.Pressable<StyledProps>`
  background-color: ${props => props.theme.secondary.background};
`

const Text = styled.Text<StyledProps>`
  color: ${props => props.theme.secondary.text};
  font-size: 15px;
  padding: 10px;
  text-transform: uppercase;
`


export default CustomButton;