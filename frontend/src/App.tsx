import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import "./index.css";
import Products from "./pages/Products";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Products />
                {/* <Routes /> */}
                {/* Guys define the styles for the toaster here */}
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
