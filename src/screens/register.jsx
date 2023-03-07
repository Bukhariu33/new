import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import * as EmailValidator from "email-validator";

function Register() {
  const [isValid, setIsValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    checkValidForm();
  }, [email, firstName, lastName, password, confirmPassword]);

  const checkValidForm = () => {
    if (firstName === "") {
      setIsValid(false);
      return;
    }

    if (lastName === "") {
      setIsValid(false);
      return;
    }

    if (email === "") {
      setIsValid(false);
      return;
    }

    if (password === "") {
      setIsValid(false);
      return;
    }

    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }

    if (EmailValidator.validate(email) === false) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  };

  const onSubmit = () => {
    //checkValidForm();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputBox}
          placeholder="first name"
          onChangeText={setFirstName}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="last name "
          onChangeText={setLastName}
        ></TextInput>

        <TextInput
          style={styles.inputBox}
          placeholder="email"
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="password"
          onChangeText={setPassword}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="confirm password"
          onChangeText={setConfirmPassword}
        ></TextInput>

        <Button
          title="submit"
          onPress={onSubmit}
          disabled={isValid === false}
        ></Button>
      </View>
      <View style={styles.bottomBox}></View>
    </View>
  );
}

export { Register };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  form: {
    flex: 0.8,
    backgroundColor: "white",
    padding: 10,
  },
  inputBox: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  bottomBox: {
    flex: 0.2,
    backgroundColor: "white",
  },
});
