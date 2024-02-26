import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    HabitsForm: {
        habitId: string | undefined,
    },
    HabitsList: undefined,
    HabitsDetails: {
        habitId: string,
    },
    HabitsStats: {
        habitId: string,
    },
}

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
