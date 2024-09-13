import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide2 from "../../assets/images/slideBanner2.jpg";
import { CenteredBox, CustomBox, ImageBox, StyledImage } from "./HomeStyled";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ height: "50vh", backgroundColor: "grey", marginTop: "70px" }}>
      <Slider {...settings}>
        <CenteredBox>
          <StyledImage src={Slide2} alt="Slide 1" />
        </CenteredBox>
        <CustomBox>
          <StyledImage src={Slide2} alt="Slide 2" />
        </CustomBox>
      </Slider>
    </Box>
  );
};

export default Home;
