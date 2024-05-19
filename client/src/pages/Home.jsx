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
import Grid from "@mui/material/Grid";
// import cover from "";

const Home = () => {
  const navigate = useNavigate();
  const [userSubreddit, setUserSubreddit] = React.useState("");
  const [latestMessages, setLatestMessages] = React.useState("");
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

  const halfScreenStyle = {
    width: "50vw", // 50% of the viewport width
    height: "100vh", // 100% of the viewport height
    display: "inline-block",
    boxSizing: "border-box",
    overflow: "auto", // If content overflows, enable scrolling
  };

  return (
    <div>
      <Box style={halfScreenStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "50vw",
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
                sx={{ my: 3, borderRadius: 15, textAlign: "center" }}
              />
            </form>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              width: "550px",
            }}
          >
            {subreddits.map((subreddit) => (
              <Chip label={`r/${subreddit}`} sx={{ mr: 1, my: 1 }} />
            ))}
            <Chip label={"..."} sx={{ ml: 1, my: 1 }} />
          </Box>
        </Box>
      </Box>
      <Box
        style={halfScreenStyle}
        sx={{
          backgroundImage: `url('https://preview.redd.it/ukfgac4noiv51.png?width=1280&format=png&auto=webp&s=4de53ba93bbfe5431aca85c728bea64a65eb4619')`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundSize: "cover",
        }}
      ></Box>
    </div>
  );
};

export default Home;
