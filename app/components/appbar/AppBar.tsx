import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const ButtonAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar color="secondary">
          <div
            style={{
              margin: "0 auto",
              width: "50%",
            }}
          >
            <Button style={{ color: "white" }}>Home</Button>
            <Button style={{ color: "white" }}>Blog</Button>
            <Button style={{ color: "white" }}>Projects</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
