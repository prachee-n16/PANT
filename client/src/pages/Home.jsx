import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userSubreddit, setUserSubreddit] = React.useState("");

  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/subreddits.json")
      .then((response) => response.json())
      .then((data) => {
        // Extract subreddit names from the response
        const subredditNames = data.data.children.map(
          (child) => child.data.display_name
        );
        setSubreddits(subredditNames);
      })
      .catch((error) => {
        console.error("Error fetching subreddits:", error);
      });
  }, []);

  function onSubmit(e) {
    navigate("/app");
    e.preventDefault();
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box>
          <form onSubmit={(e) => navigate("/app")}>
            <Typography variant="h1">
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

            <Typography variant="subtitle1">
              transforms your favorite Reddit channels into powerful large
              language models
            </Typography>

            <TextField
              value={userSubreddit}
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
              onChange={(e) => setUserSubreddit(e.target.value)}
              sx={{ my: 2, borderRadius: 15, textAlign: "center" }}
            />
          </form>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "1000px",
          }}
        >
          {subreddits.map((subreddit) => (
            <Chip label={subreddit} sx={{ mx: 1, my: 1 }} />
          ))}
          <Chip label={"..."} sx={{ mx: 1, my: 1 }} />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
