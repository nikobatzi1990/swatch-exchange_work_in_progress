import { Text, View } from "react-native";
import AuthForm from "../components/AuthForm";

export default function Signup () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Signup</Text>
      <AuthForm />
    </View>
  );
}