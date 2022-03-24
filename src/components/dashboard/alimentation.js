import {Card, CardContent, Grid, Typography } from '@mui/material';

export const Alimentation = (props) => (
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
            Alimentation
          </Typography>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
);
