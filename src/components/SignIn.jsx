import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    padding: 10,
    width: "100%",
    maxWidth: 400,
  },
});

YupPassword(yup);
const validationSchema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().password().min(6).minSymbols(0).required(),
});

const SignIn = () => {
  const initialValues = { username: "", password: "" };

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">GitHub Repository Rate</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.formContainer}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button title="Sign in" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
