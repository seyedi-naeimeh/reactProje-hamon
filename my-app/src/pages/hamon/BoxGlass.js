import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import main from "./main.scss";
import CardAdv from './CardAdv';
export default function BoxGlass() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Box  className="glass"><CardAdv /></Box>
      </Container>
    </React.Fragment>
  );
}
