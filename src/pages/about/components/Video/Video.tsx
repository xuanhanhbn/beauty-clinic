import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./video.css";
const Video = () => {
  return (
    <>
      <Box component="section">
        <Typography
          variant="subtitle2"
          mb={2}
          textAlign="left"
          paddingTop="75px"
        >
          About
        </Typography>
        <Typography variant="h3" mb={2} textAlign="left">
          We are a leading beauty clinic that has
          <br />
          been around since 2002
        </Typography>
        <Box
          component="p"
          textAlign="left"
          lineHeight={"24px"}
          fontWeight="400"
          fontSize="16px"
          letterSpacing="1px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          <br /> purus sit amet luctus venenatis
        </Box>
      </Box>
      <Box component="section">
        {/* <img src={BG} alt="background" className="background-image"/> */}
        <Box>
          <Box className="video" paddingTop="58px">
            <Box className="play-video">
              <Box className="play-video-icon">
                <PlayArrowIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Video;
