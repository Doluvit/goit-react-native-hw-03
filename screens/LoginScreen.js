import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen() {
 const [password, setPassword] = useState("");
 const [secureTextEntry, setSecureTextEntry] = useState(true);
 const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View
          style={{
            ...styles.formWrapper,
            paddingBottom: isOpenKeyboard ? 10 : 111,
            height: isOpenKeyboard ? 270 : "auto",
          }}
        >
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
            ></TextInput>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Пароль"
                secureTextEntry={secureTextEntry}
                onChange={setPassword}
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
                value={password}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={togglePassword}
              >
                <Text style={styles.showPasswordButtonText}>
                  {secureTextEntry ? "Показати" : "Сховати"}
                </Text>
              </TouchableOpacity>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Увійти</Text>
            </Pressable>
            <Text style={styles.text}>Немає акаунту? Зареєструватись</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 600,
    color: "#212121",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  input: {
    height: 50,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  showPasswordButton: {
    marginLeft: 10,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 16,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  button: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
