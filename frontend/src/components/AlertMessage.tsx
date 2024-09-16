import React from "react";
import { Alert } from "@mui/material";

interface AlertMessageProps {
  message: string | null;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message }) =>
  message ? (
    <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
      {message}
    </Alert>
  ) : null;

export default AlertMessage;
