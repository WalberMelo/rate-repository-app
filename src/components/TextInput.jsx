import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: "red",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.errorInput,
    style, // Allows for custom style override
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
