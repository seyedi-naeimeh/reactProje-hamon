import React from "react";
import main from "./main.scss";
import WithSideBar from "layout/WithSideBar";
import CardAdv from "./CardAdv";
import { Box, List, ListItem } from "@mui/material";
import BoxGlass from "./BoxGlass";

function Hamon() {
  return (
    <>
      <Box className="wraper">
        <Box className="area">
          <List className="circles">
            <BoxGlass />
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
            <ListItem className="gh"></ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default WithSideBar(Hamon);
