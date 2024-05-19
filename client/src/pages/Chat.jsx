import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

function stringToColor(string) {
  if (string === "Prachee Nanda") {
    return "purple";
  } else if (string === "Sub Brain") {
    return "#FF4500";
  } else {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
}

export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      color: "#FFF",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [channelMessages, setChannelMessages] = useState([
    {
      id: "1234",
      user: "Sub Brain",
      message: "Data from r/csCareerQuestions! Ask me anything :)",
    },
  ]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    var id = uuidv1();

    setChannelMessages((prev) => [
      ...prev,
      {
        id: id,
        message: newMessage,
        user: "Prachee Nanda",
      },
    ]);
    setNewMessage("");
  };

  return (
    <div>
      <Box>
        <Typography sx={{ mt: 2 }} fontWeight="700" variant="h3" align="center">
          <Box
            component="span"
            sx={{
              color: "#FF4500",
            }}
          >
            Sub
          </Box>
          Brain
        </Typography>
        <Typography variant="subtitle1" fontWeight="400" align="center">
          This is the beginning of this chat.
        </Typography>
      </Box>
      <Box>
        {channelMessages.map((message, index) => (
          <Box display="flex" key={message.id} sx={{ direction: "row", p: 2 }}>
            {message.user && (
              <Avatar
                variant="rounded"
                key={message.id + "Avatar"}
                sx={{ width: 24, height: 24, mx: 5 }}
                {...stringAvatar(message.user)}
              />
            )}
            <Box key={message.id + "Message"}>
              <Typography
                sx={{
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                  p: 2,
                  mx: 2,
                  borderRadius: "10px",
                }}
              >
                {message.message}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
        ))}
      </Box>

      <form onSubmit={handleOnSubmit}>
        <TextField
          value={newMessage}
          id="outlined-basic"
          label=""
          variant="outlined"
          fullWidth
          focused
          placeholder="r/getStarted"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RedditIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SendRoundedIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            my: 2,
            mx: 5,
            borderRadius: 15,
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "95%",
          }}
        />
      </form>
    </div>
  );
};

export default Chat;
