import { Text, View } from "react-native";
import Input from "../components/Input";

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
      <Input 
        autoComplete="email" 
        label="Email Address" 
        accessibilityLabel="email address input">  
      </Input>

      <Input 
        autoComplete="password" 
        label="Password" 
        accessibilityLabel="password input"
        secureTextEntry={true}>  
      </Input>
    </View>
  );
}