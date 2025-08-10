import { Text, View, StyleSheet } from "react-native";
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
      <AuthForm />
      <Text style={styles.subtext}>Already have an account?</Text>
      <Link href="/login">Log In!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  subtext: {
    marginTop: 10,
  }
});