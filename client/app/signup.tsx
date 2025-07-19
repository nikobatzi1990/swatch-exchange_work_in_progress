import { Text, View } from "react-native";
import { Link } from 'expo-router';
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
      <Text>Already have an account?</Text>
      <Link href="/login" >Log In!</Link>
    </View>
  );
}