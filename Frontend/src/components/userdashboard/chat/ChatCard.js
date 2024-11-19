import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Button, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Chat from "./chat";
import "./chat.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER);

const ChatCard = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const storedUsername = decodedToken.username;
      const fixedRoom = sessionStorage.getItem("currentGroup_uuid");
      if (storedUsername) {
        setUsername(storedUsername);
        setRoom(fixedRoom);
        socket.emit("join_textchat", fixedRoom);
        setShowChat(true);
      }
    }

    // Event listener for message history
    socket.on("message_history", (messages) => {
      setMessageHistory(messages);
    });

    socket.on("receive_message", (message) => {
      setMessageHistory((oldMessages) => [...oldMessages, message]);
    });
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_textchat", room);
      setShowChat(true);
    }
  };
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toISOString(),
      };
      await socket.emit("send_message", messageData);
      setMessageHistory([...messageHistory, messageData]);
      setCurrentMessage("");
    }
  };
  return (
    <>
      <Typography component={"div"}>
        <h5>NACHRICHTEN SCHREIBEN</h5>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.default",
            borderColor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            padding: "2%",
          }}
        >
          <Chat
            socket={socket}
            username={username}
            room={room}
            messageHistory={messageHistory}
          />
        </Paper>
        <FormControl
          variant="outlined"
          color="secondary"
          sx={{
            width: "100%",
            rowGap: "3",
            marginTop: "1vw",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Schreibe deine Nachricht"
            color="secondary"
            multiline
            rows={3}
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ marginTop: "1vw" }}
            onClick={sendMessage}
          >
            NACHRICHT ABSENDEN
          </Button>
        </FormControl>
      </Paper>
    </>
  );
};

export default ChatCard;
