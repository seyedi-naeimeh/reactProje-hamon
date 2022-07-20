import { Container, CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import NavBar from "./component/NavBar";
import Caurosel from "./component/Caurosel";
import Category from "./component/Category";
import CategoryInfo from "./component/CategoryInfo";
import Footer from "./component/Footer";



const WithLayout = (Component) => {
  return (props) => (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <NavBar />
        <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Caurosel />
            </Grid>
            <Grid item xs={12}>
              <Component {...props} />
            </Grid>
            <Grid item xs={12}>
              <Category />
            </Grid>
            <Grid item xs={12}>
              <CategoryInfo />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default WithLayout;
