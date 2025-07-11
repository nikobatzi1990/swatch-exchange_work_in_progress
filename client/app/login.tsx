import { Text, View } from "react-native";
import Input from "../components/Input";

export default function Login () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Input autoComplete="email"></Input>
    </View>
  );
}