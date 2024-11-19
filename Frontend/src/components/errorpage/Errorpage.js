import React from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./lottie/OMKKoiYITJ.json";

// MUI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Container, Typography } from "@mui/material";

export default function Errorpage() {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    height: 200,
  };
  const user_uuid = sessionStorage.getItem("uuid");
  const { View } = useLottie(options);

  return (
    <Box
      sx={{
        height: { xs: "60vh", md: " 80vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
      }}
    >
      <Typography component={"div"}>
        <h2>DAS WAR NICHTS!</h2>
      </Typography>
      <Typography
        component={"div"}
        sx={{
          marginTop: 4,
        }}
      >
        <h3>404 - Da ist etwas schiefgelaufen.</h3>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component="Link"
        to={`/user/dashboard/${user_uuid}`}
        sx={{
          marginTop: 2,
          zIndex: 5000,
        }}
      >
        Hier geht es zurück zum Dashboard
      </Button>
      <Box sx={{ maxWidth: "60vw", marginTop: { xs: 0, md: "-10vh" } }}>
        {View}
      </Box>
    </Box>
  );
}
