import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
//icon
import LaptopIcon from '@mui/icons-material/Laptop';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CategoryInfo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2}  key={index}>
            <Item className='subInfo'>
                <Box>
                    <LaptopIcon />
                    <Typography>لوازم خانگی</Typography>
                    <Typography>(2253)</Typography>
                </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
