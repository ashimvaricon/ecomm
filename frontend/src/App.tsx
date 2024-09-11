import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

const App: React.FC = () => {
    return (
        <Router>
            <Container>
                <Routes />
                {/* Guys define the styles for the toaster here */}
                <ToastContainer />
            </Container>
        </Router>
    );
};

export default App;
