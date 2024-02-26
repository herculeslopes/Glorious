import SelectDropdown, { SelectDropdownProps } from "react-native-select-dropdown";
import styled from "styled-components/native";
import { ThemeStyles } from "../Themes/types";

export type StyledProps = {
  theme: ThemeStyles;
}

export const Screen = styled.ScrollView<StyledProps>`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.primary.background};
`

export const Title = styled.Text<StyledProps>`
  color: ${props => props.theme.primary.text};
  font-size: 44px;
  font-weight: bold;
`

export const Field = styled.View<StyledProps>`
  gap: 10;
  margin-bottom: 20px;
`

export const Label = styled.Text<StyledProps>`
  color: ${props => props.theme.primary.text};
  font-size: 20px;
`

export const Input = styled.TextInput<StyledProps>`
  color: ${props => props.theme.primary.text};
  background-color: ${props => props.theme.secondary.background};
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
`

// Default React Native styling


export const Dropdown: React.FC<SelectDropdownProps> = (props) => {
  return (
    <SelectDropdown
      {...props}
      buttonTextStyle={{
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 24,
      }}
      rowTextStyle={{
        textTransform: 'capitalize',
      }}
      buttonStyle={{
        borderRadius: 5,
        backgroundColor: '#242424',
      }}
      rowStyle={{
        // borderRadius: ,
      }}

      dropdownStyle={{
        borderRadius: 5,
      }}

      // dropdownOverlayColor="ffffff"
    // dropdownStyle
    // dropdownStyle={{backgroundColor: '#' }}
    />
  )
}