import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import imgDowntown from "./img/downtown.webp";
import imgDowntownMobile from "./img/downtown_mobile.webp";
import Logo from "./img/logo.webp";

function welcome() {
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "background.default",
        borderColor: "secondary.main",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "start",
        margin: "2%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: {
            md: `url(${imgDowntown})`,
            xs: `url(${imgDowntownMobile})`,
          },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: { md: "80vh", xs: "30vh" },
          width: { md: "100vh", xs: "100%" },
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography component={"div"}>
          <h1>Willkommen bei</h1>
        </Typography>
        <img src={Logo} width={"80%"} alt="DownTown" />
        <Typography
          component={"div"}
          sx={{
            width: 350,
            textAlign: "center",
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          <h3>Dem digitalen Treffpunkt für dich!</h3>
        </Typography>
        <Button color="secondary" variant="contained" href="/login">
          Weiter zum Login
        </Button>
      </Box>
    </Paper>
  );
}

export default welcome;
