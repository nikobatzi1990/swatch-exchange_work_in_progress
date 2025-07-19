import { Text, View } from "react-native";
import AuthForm from "../components/AuthForm";

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
      <AuthForm />
      
    </View>
  );
}