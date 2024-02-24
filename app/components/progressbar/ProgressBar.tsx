"use client";
import * as React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Progressbar = () => {
  const [now, setNow] = React.useState([
    {
      text: "HTML5",
      value: 0,
      variant: "success",
    },
    {
      text: "CSS",
      value: 0,
      variant: "success",
    },
    {
      text: "React",
      value: 0,
      variant: "success",
    },
    {
      text: "Next.js",
      value: 0,
      variant: "danger",
    },
    {
      text: "Javascript",
      value: 0,
      variant: "success",
    },
    {
      text: "Having Fun",
      value: 0,
      variant: "danger",
    },
  ]);
  React.useEffect(() => {
    setNow([
      {
        text: "HTML5",
        value: 90,
        variant: "success",
      },
      {
        text: "CSS",
        value: 65,
        variant: "info",
      },
      {
        text: "React.js",
        value: 85,
        variant: "warning",
      },
      {
        text: "Next.js",
        value: 80,
        variant: "danger",
      },
      {
        text: "Javascript",
        value: 90,
        variant: "success",
      },
      {
        text: "Having Fun",
        value: 100,
        variant: "danger",
      },
    ]);
  }, []);
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          width: "50%",
        }}
      >
        {now.map((skill) => {
          return (
            <>
              <span style={{ color: "white" }}>{skill.text}</span>
              <ProgressBar now={skill.value} variant={skill.variant} />
            </>
          );
        })}
      </div>
    </>
  );
};
