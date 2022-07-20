import React from "react";
import RoutePages from "routes/RoutePages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./assets/fonts/IRANSansWeb(FaNum).woff2";
import "./assets/fonts/IRANSansWeb(FaNum).woff"

const theme = createTheme({
  direction: "rtl",
  typography: {
    // fontFamily: ["IRANSans"].join(","),
    fontSize: 14,
    
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'transparent',
        },
      },
    },
  },
  
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
  
});
function App({ children }) {
  return (
 
      <CacheProvider value={cacheRtl}>
        <div dir="rtl">
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ToastContainer />
            <RoutePages />
          </ThemeProvider>
        </div>
      </CacheProvider>
   
  );
}

export default App;
