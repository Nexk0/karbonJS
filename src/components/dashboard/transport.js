import {Card, CardContent, Grid, Typography } from '@mui/material';

export const Transport = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        <Grid item>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            Transport
          </Typography>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
);
