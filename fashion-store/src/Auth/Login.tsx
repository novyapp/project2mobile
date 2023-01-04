import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { AuthNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Forms/TextInput";
import Checkbox from "../components/Forms/Checkbox";
import Footer from "./components/Footer";
import { BorderlessButton } from "react-native-gesture-handler";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const assets = [];

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Don't have account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.navigate("Home"),
  });

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below to login to your account
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

        <TextInput
          ref={password}
          icon="lock"
          placeholder="Enter your Password"
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
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="m"
          alignItems="center"
        >
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />

          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Log into your account"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
