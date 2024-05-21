import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  Avatar,
  Alert,
} from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckIcon from "@mui/icons-material/Check";
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
  const [question, setQuestion] = useState("");
  const [channelMessages, setChannelMessages] = useState([
    {
      id: "1234",
      user: "Sub Brain",
      message: "Data from r/csCareerQuestions! Ask me anything :)",
    },
  ]);

  useEffect(() => {
    // Define the URL of your localhost server
    const q_url = "http://127.0.0.1:8000/q/?question=" + question; // Replace YOUR_PORT with the port number
    var sysData;

    // Make a GET request to your localhost server
    fetch(q_url)
      .then((response) => {
        // console.log(response);
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Do something with the data from the response
        setChannelMessages((prev) => [
          ...prev,
          {
            id: id,
            message: data.question,
            user: "Sub Brain",
          },
        ]);
        // console.log(data.question);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });

    var id = uuidv1();
  }, [question]);

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

    setQuestion(newMessage);
    setNewMessage("");
  };

  const half1ScreenStyle = {
    width: "76vw", // 50% of the viewport width
    height: "100vh", // 100% of the viewport height
    display: "inline-block",
    boxSizing: "border-box",
    overflow: "auto", // If content overflows, enable scrolling
  };

  const half2ScreenStyle = {
    width: "23vw", // 50% of the viewport width
    height: "100vh", // 100% of the viewport height
    display: "inline-block",
    boxSizing: "border-box",
    overflow: "auto", // If content overflows, enable scrolling
  };

  const half3ScreenStyle = {
    width: "1vw", // 50% of the viewport width
    height: "100vh", // 100% of the viewport height
    display: "inline-block",
    boxSizing: "border-box",
    backgroundColor: "#121212",
    overflow: "auto", // If content overflows, enable scrolling
  };

  return (
    <div>
      <Box style={half3ScreenStyle} sx={{}}></Box>
      <Box style={half1ScreenStyle}>
        <div>
          <div style={{ height: "90vh", overflowY: "auto" }}>
            <Box>
              <Typography
                sx={{ mt: 2 }}
                fontWeight="700"
                variant="h3"
                align="center"
              >
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
              {channelMessages.map((message, index) =>
                message.message && message.user ? (
                  <Box
                    display="flex"
                    key={message.id}
                    sx={{ direction: "row", p: 2 }}
                  >
                    <Avatar
                      variant="rounded"
                      key={message.id + "Avatar"}
                      sx={{ width: 24, height: 24, mx: 5 }}
                      {...stringAvatar(message.user)}
                    />

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
                ) : null
              )}
            </Box>

            {/* {hasResponse.systemSent && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          We are processing your request!
        </Alert>
      )} */}
          </div>
          <form onSubmit={handleOnSubmit}>
            <TextField
              //   disabled={!hasResponse}
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
                width: "70%",
              }}
            />
          </form>
        </div>
      </Box>
      <Box
        style={half2ScreenStyle}
        sx={{
          backgroundImage: `url('https://i.redd.it/ax8u9llk8jy61.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundSize: "cover",
        }}
      ></Box>
    </div>
  );
};

export default Chat;
