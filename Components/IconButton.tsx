import styled from "styled-components/native";
import { StyledProps } from "./StyledComponents";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: Function;
}

const IconButton = ({ onPress }: Props) => {
  return (
    <Wrapper>
      <StyledPressable onPress={() => onPress()} android_ripple={{ color: '#00AFC6' }}>
        <Icon name="add" />
      </StyledPressable>
    </Wrapper>
  )
}

const Wrapper = styled.View<StyledProps>`
  border-radius: 20px;
  overflow: hidden;
  height: 30px;
  aspect-ratio: 1;
`

const StyledPressable = styled.Pressable<StyledProps>`
  justify-content: center;
  align-items: center;
  height: 30px;
  aspect-ratio: 1;
  background-color: ${props => props.theme.accent.default};
  
`

const Icon = styled(Ionicons) <StyledProps>`
  font-size: 25px;
  color: ${props => props.theme.secondary.background};
`

export default IconButton;