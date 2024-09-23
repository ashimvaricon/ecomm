import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide2 from "../../assets/images/slideBanner2.jpg";
import { BoxStyled, CenteredBox, CustomBox, StyledImage } from "./styles";
import { sliderSettings } from "../../utils/sliderSettings";
import Services from "../Services";
import CategorySlider from "../Products/slider/index";
import Products from "../Products";
import { Button, Box } from "@mui/material"; // Import MUI Button and Box
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const Home = () => {
  return (
    <>
      <BoxStyled>
        <Slider {...sliderSettings}>
          <CenteredBox>
            <StyledImage src={Slide2} alt="Slide 1" />
          </CenteredBox>
          <CustomBox>
            <StyledImage src={Slide2} alt="Slide 2" />
          </CustomBox>
        </Slider>
      </BoxStyled>

      <Services />

      <CategorySlider />

      <Products />

      {/* Button below products */}
      <Box textAlign="center" m={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/products" // Link to the products page
        >
          View More Products
        </Button>
      </Box>
    </>
  );
};

export default Home;
