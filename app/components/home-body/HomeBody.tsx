"use client";
import * as React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { Progressbar } from "../progressbar/ProgressBar";
import { Gallery } from "../gallery/Gallery";
import { Socials } from "../socials/Socials";

export const HomeBody: React.FC = () => {
  const color = "white";
  const number = 1;
  const alternateColors = [
    ["#88B04B", "#F7CAC9", "#45B8AC"],
    ["#34568B", "#FF6F61", "#6B5B95"],
  ];
  const [colors, setColors] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setColors((prevIndex) => (prevIndex == number ? 0 : prevIndex + 1));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div
        className="about-me"
        style={{
          margin: "0 auto",
          width: "50%",
        }}
      >
        <Typography color={color} mt={5}>
          <Link
            href="#about-me"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <span id="about-me">About Me 🙋‍♂️</span>
          </Link>
        </Typography>
        <br />
        <Typography color={color}>
          Hey guys, I am Wissam Merhi - a React.js software developer working
          for{" "}
          <Link
            style={{
              border: "solid 2px",
              color: "black",
              background: "white",
              textDecoration: "none",
            }}
            href={"https://www.telerik.com/"}
          >
            Kendo UI
          </Link>{" "}
          in the React and Vue team. I like all aspects of product development
          and I try my best to get involved in all of them whether it is the
          development process itself, bug fixing, web development, testing, or
          helping the clients with their projects.
        </Typography>
        <br />
        <div
          style={{
            margin: "0 auto",
            width: "50%",
          }}
        ></div>
        <Typography color={color}>
          I define myself as a very ambitious and determined person who is,
          unfortunately, never satisfied of his personal development 🥲.
          Nevertheless, I do make sure to have fun in everything I do. I am also
          a big fan of learning new stuff and I have really good knowledge in
          all aspects of social media whether it is video editing, photoshop,
          and other specifics such as growing and expanding your audience.
        </Typography>
        <br />
        <Typography color={color}>
          For a full bio about me, click this{" "}
          <Button
            style={{
              //color: alternateColors[colors][1],
              //background: alternateColors[colors][2],
              fontSize: "16px",
            }}
          >
            Cool Sexy Button
          </Button>
        </Typography>
      </div>
      <div>
        <div
          className="skills"
          style={{
            margin: "0 auto",
            width: "50%",
          }}
        >
          <Typography color={color} mt={5} mb={2}>
            <Link
              href="#skills"
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <span id="about-me">Skills ⚒️</span>
              <Typography color={"white"}>
                <i>Learning is a never-ending process</i>
              </Typography>
            </Link>
          </Typography>
        </div>
        <Progressbar />
      </div>

      <div
        className="gallery"
        style={{
          margin: "0 auto",
          width: "50%",
        }}
      >
        <Typography color={color} mt={5} mb={2}>
          <Link
            href="#random-images"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <span id="random-images">Random Images 😋</span>
          </Link>
        </Typography>
        <Gallery />
      </div>
      <div className="socials">
        <div
          className="socials"
          style={{
            margin: "0 auto",
            width: "50%",
          }}
        >
          <Typography color={color} mt={5} mb={2}>
            <Link
              href="#socials"
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <span id="socials">Socials 🤙</span>
            </Link>
          </Typography>
          <Typography color={"white"} mb={5}>
            I had been making youtube videos for 3 years before I stopped. These
            days, I am sometimes dropping some tweets, but I will eventually get
            back to content creation when the time is right.
          </Typography>
          <Socials />
        </div>
      </div>
    </>
  );
};
