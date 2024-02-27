import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: Function;
}

const IconButton = ({ onPress }: Props) => {
  return (
    <Wrapper>
      {/* <StyledPressable onPress={() => onPress()} android_ripple={{ color: '#00AFC6' }}> */}
      <StyledPressable onPress={() => onPress()} android_ripple={{ color: '#dbdbdb' }}>
        <Icon name="add" />
      </StyledPressable>
    </Wrapper>
  )
}

const Wrapper = styled.View<StyledProps>`
  border-radius: 30px;
  overflow: hidden;
  height: 60px;
  aspect-ratio: 1;
`

const StyledPressable = styled.Pressable<StyledProps>`
  justify-content: center;
  align-items: center;
  height: 60px;
  aspect-ratio: 1;
  background-color: ${props => props.theme.accent.default};
  background-color: white;
`

const Icon = styled(Ionicons) <StyledProps>`
  font-size: 50px;
  /* background-color: orange; */
  /* color: ${props => props.theme.secondary.background}; */
  color: #121212;
`

export default IconButton;