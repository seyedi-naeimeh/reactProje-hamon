import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TOPBar from "./TOPBar";
import SubBar from "./SubBar";
//style
import main from "../../../style/main/main.scss"



export default function NavBar() {
  return (
    <Box>
      <Grid xs={12}>
        <Grid xs={12}>
          <TOPBar />
        </Grid>
        <Grid xs={12} className="style_SubBar">
          <SubBar />
        </Grid>
      </Grid>
    </Box>
  );
}
