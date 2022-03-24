import {Card, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';


export const Questions = (props) => {
  const {title} = props;


  return (
    <Card
      component="a"
      sx={{ height: '100%'}}
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
              {title}
            </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
)};

SideActions.propTypes = {
  title: PropTypes.string
};