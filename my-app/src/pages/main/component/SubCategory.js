import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function SubCategory() {
  return (
    <>
      <Box className="category_title">
        <Box>
          <Typography>
            <FavoriteBorderIcon />
            خدمات کسب وکار
          </Typography>
          <typography>(12254)</typography>
        </Box>
        <Typography>نمایش همه </Typography>
      </Box>
      <Divider />
      <Box>
        <Grid xs={12} className="sub_title">
          <Grid xs={6} className="sub">
            خدمات کامپیوتر
          </Grid>
          <Grid xs={6} className="sub">
            خدمات کامپیوتر
          </Grid>
        </Grid>
        <Grid xs={12} className="sub_title">
          <Grid xs={6} className="sub">
            خدمات کامپیوتر
          </Grid>
          <Grid xs={6} className="sub">
            خدمات کامپیتور
          </Grid>
        </Grid>
        <Grid xs={12} className="sub_title">
          <Grid xs={6} className="sub">
            خدمات کامپیوتر
          </Grid>
          <Grid xs={6} className="sub">
            خدمات کامپیوتر
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SubCategory;
