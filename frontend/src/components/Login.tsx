import React from "react";
import { useForm } from "../hooks/useForm";
import { loginSchema } from "../utils/validationSchema";
import useAuthMutation from "../hooks/useAuthMutation";
import { login as loginApi } from "../services/api";
import { SubmitHandler } from "react-hook-form";
import FormField from "../components/FormField";
import AlertMessage from "../components/AlertMessage";
import { LoginFormData } from "../types/index";
import {
  Container,
  Box,
  Typography,
  Button,
  Link as MuiLink,
} from "@mui/material";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ schema: loginSchema });
  const { errorMessage, isLoading, mutate } = useAuthMutation(loginApi);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
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
          Login
        </Typography>
        <AlertMessage message={errorMessage} />
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
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
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <MuiLink href="/signup" color="primary">
              Sign Up
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
