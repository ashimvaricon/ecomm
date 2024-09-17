import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BoxStyled,
  CategoryBoxStyled,
  StackStyled,
  TypographyStyled,
} from "./styles";
import { categorySettings } from "../../../utils/sliderSettings";

const CategorySlider = () => {
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
  ];

  return (
    <BoxStyled>
      <TypographyStyled variant="h3">Featured Categories</TypographyStyled>

      <Slider {...categorySettings}>
        {categories.map((category, index) => (
          <CategoryBoxStyled key={index}>
            <StackStyled>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "500" }}
              >
                {category}
              </Typography>
            </StackStyled>
          </CategoryBoxStyled>
        ))}
      </Slider>
    </BoxStyled>
  );
};

export default CategorySlider;
