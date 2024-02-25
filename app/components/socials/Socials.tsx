import * as React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const linkStyles = {
  color: "white",
  textDecoration: "none",
};

export const Socials: React.FC = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-section-one">
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
        </div>
        <div className="flex-section-two">
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
        </div>
      </div>
      <style>
        {`
        .flex-container {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: 50%;
          justify-content: center;
          color: white;
          gap:30px;
        }
        .flex-section-one {
          display: flex;
          gap: 30px;
          flex-direction: row;
          justify-content: center;
        }
        .flex-section-two {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 40px;
          gap: 30px;
        }
        @media (max-width: 700px) {
          .flex-section-one {
            flex-direction: column;
          }
          .flex-section-two {
            flex-direction: column;
          }
        }
        `}
      </style>
    </>
  );
};
