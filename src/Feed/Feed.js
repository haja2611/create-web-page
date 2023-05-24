import React from "react";
import "./Feed.css";
import { Stack, Typography } from "@mui/material";
const Feed = () => {
  return (
    <div className="iconpage">
      <Typography
        className="text-edit"
        color="orangered"
        fontWeight={900}
        sx={{
          mt: "40px",
          textDecoration: "uppercase",
          fontSize: "25px",
          letterSpacing: "1px",
          fontWeight: "80px",
        }}
      >
        FEATURE CLIENTS _____
      </Typography>

      <Stack
        direction="row"
        mt={40}
        margin="0px"
        marginLeft={10}
        sx={{
          cursor: "pointer",
          gap: "100px",
        }}
      >
        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/md-think-584.jpg"
          className="icon1"
        ></img>

        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/MST_Logo.png"
          className="icon2"
        ></img>

        <img
          src="	https://cosecantinc.com/wp-content/uploads/2023/01/Centene_Corporation_Logo.svg_.png"
          className="icon3"
        ></img>

        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/reynolds-american-logo.png"
          className="icon4"
        ></img>
      </Stack>
    </div>
  );
};

export default Feed;
