import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function LoginPage() {
  return (
    <Box
      component="form"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        '& > :not(style)': { m: 2, width: 800 },
      }}
    >
      <h2>Login</h2><br></br>
      <Grid container justify="center" spacing={0}>
        <label>Email:</label><br></br>
        <TextField id="outlined-basic" fullWidth label="E-mail" variant="outlined" /><br></br>
        <label>Password:</label><br></br>
        <TextField id="outlined-basic" fullWidth label="Password" variant="outlined" />
      </Grid>
    </Box>
  );
}
