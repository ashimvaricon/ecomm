import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BoxStyled,
  CategoryBoxStyled,
  CatTypographyStyled,
  StackStyled,
  TypographyStyled,
} from "./styles";
import { categorySettings } from "../../../utils/sliderSettings";
import { categories } from "../../../constants/categories";

const CategorySlider = () => {
  return (
    <BoxStyled>
      <TypographyStyled variant="h3">Featured Categories</TypographyStyled>

      <Slider {...categorySettings}>
        {categories.map((category, index) => (
          <CategoryBoxStyled key={index}>
            <StackStyled>
              {/* Render the icon as a component */}
              <category.icon sx={{ width: "55px", height: "auto" }} />
              <CatTypographyStyled variant="h6">
                {category.name}
              </CatTypographyStyled>
            </StackStyled>
          </CategoryBoxStyled>
        ))}
      </Slider>
    </BoxStyled>
  );
};

export default CategorySlider;
