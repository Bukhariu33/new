import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Login({ navigation }) {
  const [inputEmail, setEmailInput] = useState();
  const [inputPassword, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const LoginPressed = () => {
    alert(inputEmail);
  };

  return (
    <View style={styles.container}>
      <View style={styles.LoginForm}>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => setEmailInput(text)}
        />
        <View style={styles.passwordCont}>
          <TextInput
            placeholder="password"
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={25}
            color="orange"
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
      </View>

      <View style={styles.bottomBox}>
        <Button title="login" onPress={LoginPressed} />
      </View>
    </View>
  );
}

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  LoginForm: {
    flex: 1,
    padding: 10,
  },
  bottomBox: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  passwordCont: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
});
