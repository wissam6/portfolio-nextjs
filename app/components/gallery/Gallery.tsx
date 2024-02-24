import * as React from "react";
import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/devreach.jpg"}
            alt="wissam merhi"
            sizes="100vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
          <Image
            src={"/all-hands.jpg"}
            alt="wissam merhi"
            sizes="100vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/gang.jpg"}
            alt="wissam merhi"
            sizes="100vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
          <Image
            src={"/beach.jpg"}
            alt="wissam merhi"
            sizes="100vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};
