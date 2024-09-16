// import React, { useState } from "react";
// import { useMutation } from "react-query";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Alert,
//   Link as MuiLink,
// } from "@mui/material";
// import { useForm } from "../hooks/useForm";
// import { signUpSchema, SignUpFormData } from "../utils/validationSchema";
// import { signUp } from "../services/api";
// import { useAuth } from "../hooks/useAuth";
// import { FormData } from "../types";

// const SignUp: React.FC = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ schema: signUpSchema });
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const mutation = useMutation(signUp, {
//     onSuccess: (data) => {
//       login(data as FormData);
//       navigate("/");
//     },
//     onError: (error: any) => {
//       setErrorMessage(error.message || "An error occurred during sign up");
//     },
//   });

//   const onSubmit = (data: SignUpFormData) => {
//     setErrorMessage(null);
//     mutation.mutate(data);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           mt: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign Up
//         </Typography>
//         {errorMessage && (
//           <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
//             {errorMessage}
//           </Alert>
//         )}
//         <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
//           <TextField
//             {...register("name")}
//             margin="normal"
//             fullWidth
//             label={
//               <span>
//                 Name <span style={{ color: "red" }}>*</span>
//               </span>
//             }
//             error={!!errors.name}
//             helperText={errors.name?.message}
//           />
//           <TextField
//             {...register("email")}
//             margin="normal"
//             fullWidth
//             label={
//               <span>
//                 Email Address <span style={{ color: "red" }}>*</span>
//               </span>
//             }
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />
//           <TextField
//             {...register("password")}
//             margin="normal"
//             fullWidth
//             label={
//               <span>
//                 Password <span style={{ color: "red" }}>*</span>
//               </span>
//             }
//             type="password"
//             error={!!errors.password}
//             helperText={errors.password?.message}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={mutation.isLoading}
//           >
//             {mutation.isLoading ? "Signing Up..." : "Sign Up"}
//           </Button>
//         </Box>
//         <Box sx={{ mt: 3 }}>
//           <Typography variant="body2">
//             Already have an account?{" "}
//             <MuiLink href="/login" color="primary">
//               Sign In
//             </MuiLink>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;

import React from "react";
import { useForm } from "../hooks/useForm";
import { signUpSchema } from "../utils/validationSchema";
import useAuthMutation from "../hooks/useAuthMutation";
import { signUp } from "../services/api";
import FormField from "../components/FormField";
import AlertMessage from "../components/AlertMessage";
import { SignUpFormData } from "../types/index";
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
  } = useForm({ schema: signUpSchema });
  const { errorMessage, isLoading, mutate } = useAuthMutation(signUp);

  const onSubmit = (data: SignUpFormData) => {
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
