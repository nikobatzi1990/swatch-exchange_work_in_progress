import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthForm />
      <Text style={styles.subtext}>Don&apos;t have an account yet?</Text>
      <Link style={styles.link} href="/signup" >Sign Up!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  subtext: {
    marginTop: 10,
  },
  link: {
    marginTop: 5,
    color: "blue",
    textDecorationLine: "underline"
  }
});