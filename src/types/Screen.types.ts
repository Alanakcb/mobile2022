import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
