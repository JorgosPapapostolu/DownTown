import React from "react";

// App imports
import ZoomCard from "./ZoomCard";
import MedalCard from "./MedalCard";
import ProfilCard from "./ProfilCard";
import Members from "./members";
import ChatCard from "./chat/ChatCard";
import Logo from "./img/logo.webp";
import "../../App.css";

import { useState, useEffect } from "react";
import { getData } from "../../utils/fetch";
import { useParams, useNavigate } from "react-router-dom";

// MUI imports
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack } from "@mui/material";

export default function UserDashboard() {
  const user_name = sessionStorage.getItem("name");
  const user_uuid = sessionStorage.getItem("uuid");
  const currentGroup = sessionStorage.getItem("currentGroup");

  const findGroupUuid = () => {
    let allgroups = JSON.parse(sessionStorage.getItem("groups"));
    let group = allgroups.find((elem) => elem.groupname === currentGroup);
    sessionStorage.setItem("currentGroup_uuid", group.group_uuid);

    if (allgroups.length === 1) {
      sessionStorage.setItem("groupcount", "1");
    } else {
      sessionStorage.setItem("groupcount", "2");
    }
    return group.group_uuid;
  };

  const group_uuid = findGroupUuid();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: "2%",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Stack
          className="stach_board_1"
          spacing={{ xs: 2, sm: 2 }}
          direction="row"
          flexWrap="wrap"
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <ZoomCard group_uuid={group_uuid} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Members />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProfilCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <MedalCard />
            </Grid>
          </Grid>
        </Stack>

        <Stack className="stach_board_2">
          <ChatCard />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              marginTop: { xs: 2 },
            }}
          >
            <img src={Logo} width={250} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
