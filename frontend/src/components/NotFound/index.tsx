import { Box, Button, Typography } from "@mui/material";
import NotFoundSvg from "../../assets/svgs/404-error.svg";
import notFoundStyles from "./styles";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box sx={notFoundStyles}>
            <Typography variant="h2" gutterBottom>
                Item Not Found
            </Typography>
            <Box mb={4}>
                <NotFoundSvg />
            </Box>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
