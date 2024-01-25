import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    color: "#d73a4a",
    marginTop: 5,
  },
});

/* 
useField hooks returns an array with [field, meta, helpers]. 

- field object contains the value of the field, the meta object contains.
- meta information such as a possible error message.
- helpers object contains different actions for changing the state of the field such as the setValue function. 
*/

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
