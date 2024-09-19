import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide2 from "../../assets/images/slideBanner2.jpg";
import { BoxStyled, CenteredBox, CustomBox, StyledImage } from "./styles";
import { sliderSettings } from "../../utils/sliderSettings";
import Services from "../Services";
import CategorySlider from "../Products/slider/index";
import Products from "../Products";
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
    </>
  );
};

export default Home;
