import { Box, Button, Icon, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Serviceintro from "../Howerpic/Serviceintro";
import Feed from "../Feed/Feed";
import Footer from "../Footer/Footer";
import { Itsolution } from "../Solution/Itsolution";
import Feedback from "../feedbb/Feedback";
import Icone from "../Iconpag/Icone";
import Content1 from "../contentpage/Content1";

const StyledBox = styled(Box)({
  height: "5%",
  width: "25%",
  cursor: "pointer",
  marginTop: "30",
  padding: "50",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});
const StyledTypography = styled(Typography)({
  marginLeft: "25%",
  marginBottom: "10%",
  marginTop: "-50px",
});
const Hack = () => {
  return (
    <div className="boo">
      <Box sx={{ background: "transparent" }}>
        <Typography variant="h1" color="white" textAlign="center" pt={40}>
          IT SOLUTIONS &
        </Typography>
        <Typography variant="h1" color="white" textAlign="center">
          TECHNOLOGY
        </Typography>
        <Typography variant="h6" color="white" align="center">
          Accelerate Stratergcy execution and Consistency in Revenue Growth!
        </Typography>
        <Typography variant="h6" color="white" align="center">
          We are Commited to Providing our Clients the Best Strategic
        </Typography>
        <Typography variant="h6" color="white" align="center">
          Guidence Available
        </Typography>
        <button className="buttonn">DISCOVER MORE</button>
      </Box>
      <Box>
        <Stack marginLeft={20} direction={"row"} spacing={5} mt={10}>
          <Box
            className="boox"
            height={150}
            width={450}
            sx={{ backgroundColor: "white" }}
          >
            <Box
              className="kutybox"
              marginTop={5}
              marginLeft={10}
              height={80}
              width={80}
              sx={{ backgroundColor: "orangered" }}
            >
              <Icon className="icon">
                <Diversity2OutlinedIcon />
              </Icon>
            </Box>
            <StyledTypography color="black" align="center" variant="h4">
              Define
            </StyledTypography>
          </Box>

          <Box height={150} width={450} sx={{ backgroundColor: "white" }}>
            <Box
              className="kutybox"
              marginTop={5}
              marginLeft={10}
              height={80}
              width={80}
              sx={{ backgroundColor: "orangered" }}
            >
              <Icon className="icon2">
                <ApartmentOutlinedIcon />
              </Icon>
            </Box>
            <StyledTypography color="black" align="center" variant="h4">
              Develope
            </StyledTypography>
          </Box>

          <Box height={150} width={450} sx={{ backgroundColor: "white" }}>
            <Box
              className="kutybox"
              marginTop={5}
              marginLeft={10}
              align="center"
              height={80}
              width={80}
              sx={{ backgroundColor: "orangered" }}
            >
              <Icon
                display="flex"
                justifyContent="center"
                align="center"
                pt="10px"
              >
                <LocalShippingOutlinedIcon />
              </Icon>
            </Box>
            <StyledTypography color="black" align="center" variant="h4">
              Deliver
            </StyledTypography>
          </Box>
        </Stack>

        <Content1 />
        <Serviceintro />
        <Feed />
        <Itsolution />
        <Feedback />
        <Icone />
        <Footer />
      </Box>
    </div>
  );
};

export default Hack;
