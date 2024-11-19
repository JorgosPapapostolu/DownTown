import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Box, Typography } from "@mui/material";

function Chat({ socket, username, room, messageHistory }) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    setMessageList(messageHistory);
  }, [messageHistory]);

  return (
    <Box className="chat-window">
      <Box className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <Box
                className="message"
                id={username === messageContent.author ? "other" : "you"}
              >
                <Box>
                  <Box className="message-content">
                    <p>{messageContent.message}</p>
                  </Box>
                  <Box className="message-meta">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component={"div"}
                    >
                      <p id="time">
                        {new Date(messageContent.time).toLocaleString("de-DE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZone: "Europe/Berlin",
                        })}
                      </p>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component={"div"}
                    >
                      <p id="author">{messageContent.author}</p>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </ScrollToBottom>
      </Box>
    </Box>
  );
}

export default Chat;
