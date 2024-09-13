import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { loginSchema, LoginFormData } from "../utils/validationSchema";
import { login as loginApi } from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { FormData } from "../types";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ schema: loginSchema });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation(loginApi, {
    onSuccess: (data) => {
      login(data as FormData);
      navigate("/");
    },
    onError: (error: any) => {
      setErrorMessage(error.message || "An error occurred during login");
    },
  });

  const onSubmit = (data: LoginFormData) => {
    setErrorMessage(null);
    mutation.mutate(data);
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
        {errorMessage && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            label={
              <span>
                Email Address <span style={{ color: "red" }}>*</span>
              </span>
            }
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label={
              <span>
                Password <span style={{ color: "red" }}>*</span>
              </span>
            }
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging in..." : "Login"}
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
