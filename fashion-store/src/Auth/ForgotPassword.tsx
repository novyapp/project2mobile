import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Linking } from "react-native";

import { AuthNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Forms/TextInput";
import Footer from "./components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const assets = [];

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Reset password"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
