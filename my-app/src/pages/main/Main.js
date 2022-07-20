import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import WithLayout from "./WithLayout";
import Search from "@mui/icons-material/Search";
import IranMap from "assets/images/mapIran/IranMap.png";
import { Divider, Typography } from "@mui/material";
import ecunion from "assets/images/footer/ecunion.png"
import enamad from "assets/images/footer/enamad.png"
import samandehi from "assets/images/footer/samandehi.png";

//style
import main from "../../style/main/main.scss";
//icon 
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchBox from "./component/SearchBox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CardImg = styled("img")(({ theme }) => ({
  width: 471,
  height: 468,
  textAlign: "center",
}));
const CardImgIcon = styled("img")(({ theme }) => ({
  width: 80,
  height: 80,
  textAlign: "center",
}));
function Main() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <SearchBox />
          <Typography sx={{marginTop:"32px"}}>شهرهای پربازدید</Typography>
          <CardImg component="img" src={IranMap} />
          
        </Grid>
        <Grid item xs={4}>
          <Box className="footer_main">
            <Grid xs={12}>
              <Typography >
                شیشه! پایگاه خرید و فروش بی‌واسطه‌ اگه دنبال چیزی هستی، شهرت رو
                انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد اگر هم می‌خوای چیزی
                بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به شیشه علاوه
                بر وبسایت، می‌تونی از شیشه روی دستگاه‌های اندرویدی، آیفون و آیپد
                هم استفاده کنی
              </Typography>
            </Grid>
            <Divider className="divider_footer"/>
            <Grid xs={12} >
              <CardImgIcon component="img" src={ecunion} />
              <CardImgIcon component="img" src={enamad} />
              <CardImgIcon component="img" src={samandehi} />
            </Grid>
            <Divider className="divider_footer"/>
            <typography>ما را در شبکه های اجتماعی دنبال کنید:</typography>
            <Grid xs={12} >
              <TwitterIcon className="social_networks"/>
              <InstagramIcon className="social_networks"/>
              <LinkedInIcon className="social_networks"/>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WithLayout(Main);
