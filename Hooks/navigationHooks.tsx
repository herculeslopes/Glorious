import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types";

export const useAppNavigation = useNavigation<NavigationProp>;
// export const useAppNavigation = () => {
//   return useNavigation<NavigationProp>;
// }