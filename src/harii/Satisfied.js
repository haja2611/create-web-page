import React from "react";
import "./Satisfied.css";
import { Box, Typography } from "@mui/material";
const Satisfied = () => {
  return (
    <Box className="scont" height={100} width={280}>
      <Typography className="word" marginLeft={10} variant="h2" align="center">
        99+
      </Typography>
      <Typography
        className="client"
        variant="h6"
        marginLeft={10}
        align="center"
      >
        Satified Client
      </Typography>
      <Box
        className="key"
        marginTop={-10}
        marginLeft={2}
        height={80}
        width={80}
        sx={{ backgroundColor: "orangered" }}
      >
        <img src="https://cosecantinc.com/wp-content/uploads/2022/11/image-1.jpg" />
      </Box>
    </Box>
  );
};

export default Satisfied;
