import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../utils/validationSchema";
import useAuthMutation from "../hooks/useAuthMutation";
import { signUp as signUpApi } from "../services/api";
import FormField from "../components/FormField";
import AlertMessage from "../components/AlertMessage";
import { SignUpFormData } from "../types";
import {
  Container,
  Box,
  Typography,
  Button,
  Link as MuiLink,
} from "@mui/material";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {},
  });

  const { errorMessage, isLoading, mutate } = useAuthMutation(signUpApi);

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    mutate(data);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <AlertMessage message={errorMessage} />
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <FormField
            label="Name"
            name="name"
            register={register}
            error={errors.name}
          />
          <FormField
            label="Email Address"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            register={register}
            error={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <MuiLink href="/login" color="primary">
              Sign In
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
