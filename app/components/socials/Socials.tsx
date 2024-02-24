import * as React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Box } from "@mui/material";

const linkStyles = {
  color: "white",
  textDecoration: "none",
};

export const Socials: React.FC = () => {
  return (
    <>
      <Box display={"flex"} gap={4} flexDirection={"row"} color={"white"}>
        <XIcon />{" "}
        <Link
          href="https://twitter.com/wissomerhi6"
          style={linkStyles}
          target="_blank"
        >
          @wissomerhi6
        </Link>
        <YouTubeIcon />{" "}
        <Link
          href="https://www.youtube.com/channel/UCD3Jt04GbA3UjzqbYTKUGKQ"
          style={linkStyles}
          target="_blank"
        >
          MightyWissam
        </Link>
        <InstagramIcon />{" "}
        <Link
          href="https://www.instagram.com/wissam_6/"
          style={linkStyles}
          target="_blank"
        >
          wissam_6
        </Link>
        <RedditIcon />{" "}
        <Link
          href="https://www.reddit.com/user/wissam_6/"
          style={linkStyles}
          target="_blank"
        >
          wissam_6
        </Link>
        <GitHubIcon />{" "}
        <Link
          href="https://github.com/wissam6"
          style={linkStyles}
          target="_blank"
        >
          wissam6 (personal)
        </Link>
        <GitHubIcon />{" "}
        <Link
          href="https://github.com/WissamProgress"
          style={linkStyles}
          target="_blank"
        >
          WissamProgress
        </Link>
      </Box>
    </>
  );
};
