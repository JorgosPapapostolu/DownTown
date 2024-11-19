import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CreateVideo from "./CreateVideo";
import useChat from "../../hooks/useVideoChatClients.js";

//MUI imports
import Button from "@mui/material/Button";
import { Paper, Box, Switch, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";

export default function Chatroom() {
  const user_uuid = sessionStorage.getItem("uuid");
  const myStreamRef = useRef();
  const [roomName, setRoomName] = useState("Videochat");

  const { socketRef, myStream, peersStreams, room } = useChat();

  //take care of my own video stream
  useEffect(() => {
    if (room === "mainroom") {
      setRoomName("GROSSEN RAUM");
    } else if (room === "partyroom") {
      setRoomName("PARTYRAUM");
    }

    const setOwnStream = () => {
      myStreamRef.current.srcObject = myStream;
    };
    myStream && setOwnStream();
  }, [myStream]);

  //toggle buttons for audio and video on/off
  const toggleAudio = () => {
    const audioTrack = myStream
      .getTracks()
      .find((track) => track.kind === "audio");
    if (audioTrack.enabled) {
      audioTrack.enabled = false;
    } else {
      audioTrack.enabled = true;
    }
  };

  const toggleVideo = () => {
    const videoTrack = myStream
      .getTracks()
      .find((track) => track.kind === "video");
    if (videoTrack.enabled) {
      videoTrack.enabled = false;
    } else {
      videoTrack.enabled = true;
    }
  };

  const currentGroup = sessionStorage.getItem("currentGroup");

  return (
    // loading ? (
    //   <div>Loading chat...</div>
    // ) : (
    <>
      <Box
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          margin: "2%",
        }}
      >
        <Typography component={"div"}>
          <h5>DU BIST JETZT IM {roomName}!</h5>
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.default",
            borderColor: "secondary.main",
            width: "100%",
            height: "500px",
          }}
        >
          <div id="video-grid">
            <video id="myOwnVideo" ref={myStreamRef} autoPlay muted></video>

            {peersStreams.map((stream) => (
              <CreateVideo peer={stream} />
            ))}
          </div>
        </Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <Stack direction={"row"} spacing={5}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  control={<Switch color="secondary" defaultChecked />}
                  label="Ton an oder aus"
                  labelPlacement="start"
                  onClick={() => {
                    toggleAudio();
                  }}
                />

                <FormControlLabel
                  control={<Switch color="secondary" defaultChecked />}
                  label="Videobild an oder aus"
                  labelPlacement="start"
                  onClick={() => {
                    toggleVideo();
                  }}
                  sx={{
                    marginRight: "2vw",
                  }}
                />
              </FormGroup>
            </FormControl>
            <Button
              variant="contained"
              color="error"
              href={`/user/dashboard/${user_uuid}`}
            >
              Raum verlassen
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
