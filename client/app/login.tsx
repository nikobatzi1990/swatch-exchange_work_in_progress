import { Text, View } from "react-native";
import { Link } from 'expo-router';
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
      <Text>Don&apos;t have an account yet?</Text>
      <Link href="/signup" >Sign Up!</Link>
    </View>
  );
}