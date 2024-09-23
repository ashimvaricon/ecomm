import { Typography, Stack } from "@mui/material";
import {
  Box1Styled,
  BoxIconStyled,
  BoxStyled,
  LocalShippingOutlinedIconStyled,
  ShoppingBagOutlinedIconStyled,
  StarBorderOutlinedIconStyled,
  TypographyStyled,
} from "./styles";

const Services = () => {
  return (
    <div>
      <BoxStyled>
        <Typography variant="h3">Why Shop With Us</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }} // Responsive layout direction
          justifyContent="center"
          spacing={3}
        >
          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <LocalShippingOutlinedIconStyled />
                <Typography color="white" variant="h5">
                  Fast Delivery
                </Typography>
                <TypographyStyled variant="body2">
                  Variations of passages of Lorem Ipsum available
                </TypographyStyled>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>

          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <ShoppingBagOutlinedIconStyled />
                <Typography color="white" variant="h5">
                  Free Shipping
                </Typography>
                <TypographyStyled variant="body2">
                  Variations of passages of Lorem Ipsum available
                </TypographyStyled>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>

          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <StarBorderOutlinedIconStyled />
                <Typography color="white" variant="h5">
                  Best Quality
                </Typography>
                <TypographyStyled variant="body2">
                  Variations of passages of Lorem Ipsum available
                </TypographyStyled>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>
        </Stack>
      </BoxStyled>
    </div>
  );
};

export default Services;
