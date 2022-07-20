import { Grid } from "@mui/material";
import Header from "./withSidebar/component/Header";
import SideBar from "./withSidebar/SideBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const WithSideBar = (Component) => {
  return (props) => (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 , marginTop:"15px"}}>
        <Grid container spacing={2}>
          <Grid  xs={3}>
            <SideBar />
          </Grid>
          <Grid  xs={9}>
            <Component {...props} />
          </Grid>
        </Grid>
      </Box>

      {/* <Footer /> */}
    </>
  );
};
export default WithSideBar;
