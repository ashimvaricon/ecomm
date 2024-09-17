import { Typography, Stack } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Box1Styled, BoxIconStyled, BoxStyled } from "./styles";

const Services = () => {
  return (
    <div>
      <BoxStyled>
        <Typography variant="h3">Why Shop With Us</Typography>
        <Stack direction="row" justifyContent="center" spacing={3}>
          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <LocalShippingOutlinedIcon
                  sx={{ width: "55px", height: "auto" }}
                />
                <Typography variant="h5">Fast Delivery </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    margin: "auto",
                    width: "300px",
                    textAlign: "center",
                    wordWrap: "break-word",
                  }}
                >
                  variations of passages of Lorem Ipsum available{" "}
                </Typography>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>

          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <ShoppingBagOutlinedIcon
                  sx={{ width: "55px", height: "auto" }}
                />
                <Typography variant="h5">Free Shipping</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    margin: "auto",
                    width: "300px",
                    textAlign: "center",
                    wordWrap: "break-word",
                  }}
                >
                  variations of passages of Lorem Ipsum available{" "}
                </Typography>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>

          <Box1Styled>
            <Typography>
              <BoxIconStyled>
                <StarBorderOutlinedIcon
                  sx={{ width: "55px", height: "auto" }}
                />
                <Typography variant="h5">Best Quality</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    margin: "auto",
                    width: "300px",
                    textAlign: "center",
                    wordWrap: "break-word",
                  }}
                >
                  variations of passages of Lorem Ipsum available{" "}
                </Typography>
              </BoxIconStyled>
            </Typography>
          </Box1Styled>
        </Stack>
      </BoxStyled>
    </div>
  );
};

export default Services;
