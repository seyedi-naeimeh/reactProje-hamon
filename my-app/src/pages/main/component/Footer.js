
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
//icon
import { FaWrench } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>کليه حقوق اين سایت متعلق به سایت شیشه می باشد</Typography>
        </Grid>
        <Grid item xs={4}>
          <grid className="support">
            <Typography><FaWrench />پشتیبانی</Typography>
            <Divider orientation="vertical" flexItem className="divider_vertical" />
            <Typography className="style_app"><FaDownload />دانلود اپلیکیشن</Typography>
          </grid>
        </Grid>
      </Grid>
    </Box>
  );
}
