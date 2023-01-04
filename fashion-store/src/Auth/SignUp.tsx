import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";
import { AuthNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Forms/TextInput";
import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Password fon't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const assets = [];

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => console.log(values),
    }
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l" marginTop="xs">
        Create account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let's us know what your name, email and your password
      </Text>

      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoComplete="email"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCapitalize="none"
            secureTextEntry
            autoComplete="password"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
          />
        </Box>
        <TextInput
          ref={passwordConfirmation}
          icon="lock"
          placeholder="Confirm your Password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCapitalize="none"
          secureTextEntry
          autoComplete="password"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
        />

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Create your account"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
